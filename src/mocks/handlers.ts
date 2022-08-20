import { rest } from 'msw';

export const handlers = [
  rest.get(
    'https://codingtest.op.gg/api/summoner/:username',
    (req, res, ctx) => {
      return res(
        ctx.json({
          summoner: {
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
                  imageUrl:
                    'https://opgg-static.akamaized.net/images/medals/gold_1.png',
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
                imageUrl:
                  'https://opgg-static.akamaized.net/images/medals/gold_1.png',
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
                imageUrl:
                  'https://opgg-static.akamaized.net/images/medals/diamond_1.png',
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
          }
        })
      );
    }
  )
];
