import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RecoilRoot } from 'recoil';
import states from '../../../states';
import Header from '../Header';

const setup = () =>
  render(
    <RecoilRoot
      initializeState={({ set }) => {
        set(states.SearchKeyword, '');
      }}>
      <Header />
    </RecoilRoot>
  );

const openInputBox = async () => {
  const searchInput = screen.getByPlaceholderText('소환사명,챔피언…');
  act(() => searchInput.focus());

  await waitFor(() => {
    expect(searchInput).toHaveFocus();
  });
};

const inputSearch = async (keyword?: string) => {
  const searchInput = screen.getByPlaceholderText('소환사명,챔피언…');
  if (!keyword) {
    userEvent.clear(searchInput);
    return;
  }
  userEvent.type(searchInput, keyword);
};

describe('Header Component Test', () => {
  it('입력에 Focusing을 줬을 때 입력 검색상자가 나타나야 한다.', async () => {
    setup();
    await openInputBox();

    const searchNav = screen.getByRole('search-nav');
    expect(searchNav).toBeInTheDocument();

    const latestButton = screen.getByText('최근검색');
    expect(latestButton).toBeInTheDocument();

    const likedButton = screen.getByText('즐겨찾기');
    expect(likedButton).toBeInTheDocument();

    const emptyMessageOfLatest =
      screen.getByText('최근에 본 소환사가 없습니다.');
    expect(emptyMessageOfLatest).toBeInTheDocument();
  });

  it('검색 상자 버튼 탭 테스트', async () => {
    setup();
    await openInputBox();

    const latestButton = screen.getByText('최근검색');
    const likedButton = screen.getByText('즐겨찾기');

    const emptyMessageOfLatest =
      screen.getByText('최근에 본 소환사가 없습니다.');
    expect(emptyMessageOfLatest).toBeVisible();

    userEvent.click(likedButton);
    const emptyMessageAfterPressedLikedButton = screen.getByText(
      '즐겨찾기를 하여 편리하게 정보를 받아보세요.',
      {
        exact: false
      }
    );
    expect(emptyMessageOfLatest).not.toBeVisible();
    expect(emptyMessageAfterPressedLikedButton).toBeVisible();

    userEvent.click(likedButton);
    userEvent.click(latestButton);

    const emptyMessageAfterPressedLatestButton = await screen.findByText(
      '최근에 본 소환사가 없습니다.'
    );
    expect(emptyMessageAfterPressedLatestButton).toBeVisible();
    expect(emptyMessageAfterPressedLikedButton).not.toBeVisible();
  });

  it(`
    1. 소환사 Hide on bush를 검색했을 경우 길이가 1인 result와 name이 "Hide on bush"가 되야한다.
    2. 검색된 Hide on bush를 클릭한다.
    3. Search Input keyword를 지운다.
    4. 최근 검색 리스트를의 갯수를 확인한다.
  `, async () => {
    setup();
    await openInputBox();
    await act(() => {
      inputSearch('Hide on bush');
    });
    const list = await screen.findAllByRole('search-summoner-result');

    for (let i = 0; i < list.length; i++) {
      expect(list[i]).toBeInTheDocument();
    }

    const name = await screen.findByRole('search-summoner-name');

    expect(name).toBeInTheDocument();
    // eslint-disable-next-line jest-dom/prefer-to-have-text-content
    expect(name.textContent).toBe('Hide on bush');

    await userEvent.click(list[0]);
    await act(() => {
      inputSearch();
    });

    const latestButton = screen.getByText('최근검색');
    const likedButton = screen.getByText('즐겨찾기');

    const emptyMessageOfLatest =
      screen.queryByText('최근에 본 소환사가 없습니다.');

    expect(emptyMessageOfLatest).not.toBeInTheDocument();

    const latestSummoners = screen.getAllByRole('record-latest-summoner');

    for (let i = 0; i < latestSummoners.length; i++) {
      const summoner = latestSummoners[i];
      expect(summoner).toBeInTheDocument();
      const likeButton = screen.getByRole('search-like-button');
      const delButton = screen.getByRole('remove-like-button');
      await userEvent.click(likeButton);
      await userEvent.click(delButton);
    }

    await userEvent.click(likedButton);
    const likedSummoners = screen.getAllByRole('record-liked-summoner');

    for (let i = 0; i < likedSummoners.length; i++) {
      const summoner = likedSummoners[i];
      expect(summoner).toBeInTheDocument();
      const delButton = screen.getByRole('remove-liked-button');
      await userEvent.click(delButton);
    }

    const emptyMessageAfterPressedLikedButton = screen.getByText(
      '즐겨찾기를 하여 편리하게 정보를 받아보세요.',
      {
        exact: false
      }
    );
    expect(emptyMessageAfterPressedLikedButton).toBeVisible();

    await userEvent.click(latestButton);

    const emptyMessageOfLatestAfterAllremoved =
      screen.getByText('최근에 본 소환사가 없습니다.');
    expect(emptyMessageOfLatestAfterAllremoved).toBeVisible();
  });
});
