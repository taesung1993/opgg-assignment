export const MOCK_SUMMONER = {
  name: 'Hide on bush',
  level: 43,
  profileImageUrl:
    'https://opgg-static.akamaized.net/images/profile_icons/profileIcon1625.jpg',
  profileBorderImageUrl:
    'https://opgg-static.akamaized.net/images/borders2/challenger.png',
  url: 'https://www.op.gg/summoner/userName=Hide on bush',
  leagues: [
    {
      hasResults: true,
      wins: 986,
      losses: 533,
      tierRank: {
        name: '솔랭',
        tier: 'Grandmaster',
        tierDivision: 'Grandmaster',
        string: 'Grandmaster (723LP)',
        shortString: 'GM1',
        division: 'i',
        imageUrl:
          'https://opgg-static.akamaized.net/images/medals/grandmaster_1.png',
        lp: 723,
        tierRankPoint: 1
      }
    },
    {
      hasResults: true,
      wins: 95,
      losses: 413,
      tierRank: {
        name: '자유 5:5 랭크',
        tier: 'Gold',
        tierDivision: 'Gold',
        string: 'Gold (20LP)',
        shortString: 'G1',
        division: 'i',
        imageUrl: 'https://opgg-static.akamaized.net/images/medals/gold_1.png',
        lp: 20,
        tierRankPoint: 148
      }
    }
  ],
  previousTiers: [
    {
      name: '솔랭',
      tier: 'Platinum',
      tierDivision: 'Platinum',
      string: 'Platinum (140LP)',
      shortString: 'P1',
      division: 'i',
      imageUrl:
        'https://opgg-static.akamaized.net/images/medals/platinum_1.png',
      lp: 140,
      tierRankPoint: 69,
      season: 9
    },
    {
      name: '솔랭',
      tier: 'Grandmaster',
      tierDivision: 'Grandmaster',
      string: 'Grandmaster (383LP)',
      shortString: 'GM1',
      division: 'i',
      imageUrl:
        'https://opgg-static.akamaized.net/images/medals/grandmaster_1.png',
      lp: 383,
      tierRankPoint: 199,
      season: 8
    },
    {
      name: '솔랭',
      tier: 'Gold',
      tierDivision: 'Gold',
      string: 'Gold (502LP)',
      shortString: 'G1',
      division: 'i',
      imageUrl: 'https://opgg-static.akamaized.net/images/medals/gold_1.png',
      lp: 502,
      tierRankPoint: 297,
      season: 7
    },
    {
      name: '솔랭',
      tier: 'Diamond',
      tierDivision: 'Diamond',
      string: 'Diamond (977LP)',
      shortString: 'D1',
      division: 'i',
      imageUrl: 'https://opgg-static.akamaized.net/images/medals/diamond_1.png',
      lp: 977,
      tierRankPoint: 48,
      season: 6
    }
  ],
  ladderRank: {
    rank: 790218,
    rankPercentOfTop: 4
  },
  profileBackgroundImageUrl:
    'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taliyah_0.jpg'
};

export const MOCK_GAME_WINS_RATE = {
  champions: [
    {
      id: 126,
      key: 'Jayce',
      name: '제이스',
      imageUrl:
        'https://opgg-static.akamaized.net/images/lol/champion/Jayce.png?image=w_30&v=1',
      games: 3,
      kills: 168,
      deaths: 50,
      assists: 298,
      wins: 3,
      losses: 0,
      cs: 68,
      rank: 1
    },
    {
      id: 18,
      key: 'Tristana',
      name: '트리스타나',
      imageUrl:
        'https://opgg-static.akamaized.net/images/lol/champion/Tristana.png?image=w_30&v=1',
      games: 43,
      kills: 123,
      deaths: 168,
      assists: 97,
      wins: 37,
      losses: 6,
      cs: 122,
      rank: 2
    },
    {
      id: 106,
      key: 'Volibear',
      name: '볼리베어',
      imageUrl:
        '//opgg-static.akamaized.net/images/lol/champion/Volibear.png?image=q_auto&v=1591083841',
      games: 91,
      kills: 47,
      deaths: 28,
      assists: 113,
      wins: 56,
      losses: 35,
      cs: 137,
      rank: 3
    },
    {
      id: 236,
      key: 'Lucian',
      name: '루시안',
      imageUrl:
        'https://opgg-static.akamaized.net/images/lol/champion/Lucian.png?image=w_30&v=1',
      games: 96,
      kills: 43,
      deaths: 87,
      assists: 139,
      wins: 82,
      losses: 14,
      cs: 54,
      rank: 4
    },
    {
      id: 126,
      key: 'Jayce',
      name: '제이스',
      imageUrl:
        'https://opgg-static.akamaized.net/images/lol/champion/Jayce.png?image=w_30&v=1',
      games: 40,
      kills: 160,
      deaths: 191,
      assists: 48,
      wins: 7,
      losses: 33,
      cs: 165,
      rank: 5
    },
    {
      id: 80,
      key: 'Pantheon',
      name: '판테온',
      imageUrl:
        '//opgg-static.akamaized.net/images/lol/champion/Pantheon.png?image=q_auto&v=1591083841',
      games: 99,
      kills: 282,
      deaths: 96,
      assists: 205,
      wins: 71,
      losses: 28,
      cs: 154,
      rank: 6
    },
    {
      id: 112,
      key: 'Viktor',
      name: '빅토르',
      imageUrl:
        'https://opgg-static.akamaized.net/images/lol/champion/Viktor.png?image=w_30&v=1',
      games: 99,
      kills: 218,
      deaths: 126,
      assists: 202,
      wins: 83,
      losses: 16,
      cs: 95,
      rank: 7
    }
  ],
  recentWinRate: [
    {
      id: 126,
      key: 'Jayce',
      name: '제이스',
      imageUrl:
        'https://opgg-static.akamaized.net/images/lol/champion/Jayce.png?image=w_30&v=1',
      wins: 11,
      losses: 5
    },
    {
      id: 45,
      key: 'Veigar',
      name: '베이가',
      imageUrl:
        'https://opgg-static.akamaized.net/images/lol/champion/Veigar.png?image=q_auto&v=1591083841',
      wins: 6,
      losses: 4
    },
    {
      id: 34,
      key: 'Anivia',
      name: '애니비아',
      imageUrl:
        'https://opgg-static.akamaized.net/images/lol/champion/Anivia.png?image=w_30&v=1',
      wins: 5,
      losses: 13
    }
  ]
};
