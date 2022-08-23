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

export const MOCK_MATCHES = {
  games: [
    {
      mmr: 66,
      champion: {
        imageUrl:
          'https://opgg-static.akamaized.net/images/lol/champion/Malzahar.png',
        level: 6
      },
      spells: [
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png'
        },
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png'
        }
      ],
      items: [
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3113.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3340.png'
        }
      ],
      needRenew: false,
      gameId: '255228920',
      createDate: 1661209733,
      gameLength: 541,
      gameType: '자유 5:5 랭크',
      summonerId: '35205750',
      summonerName: 'Hide on bush',
      tierRankShort: 'C1',
      stats: {
        general: {
          kill: 9,
          death: 9,
          assist: 3,
          kdaString: '1.33:1',
          cs: 124,
          csPerMin: 7.5,
          contributionForKillRate: '38%',
          goldEarned: 879,
          totalDamageDealtToChampions: 3216,
          largestMultiKillString: '',
          opScoreBadge: 'ACE'
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2
        }
      },
      mapInfo: null,
      peak: [
        'https://opgg-static.akamaized.net/images/lol/perk/8229.png',
        'https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png'
      ],
      isWin: true
    },
    {
      mmr: 2574,
      champion: {
        imageUrl:
          'https://opgg-static.akamaized.net/images/lol/champion/Malzahar.png',
        level: 6
      },
      spells: [
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png'
        },
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png'
        }
      ],
      items: [
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/1056.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/1056.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3020.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/1026.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/2031.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3340.png'
        }
      ],
      needRenew: false,
      gameId: '83808376',
      createDate: 1661206183,
      gameLength: 3012,
      gameType: '자유 5:5 랭크',
      summonerId: '35205750',
      summonerName: 'Hide on bush',
      tierRankShort: 'C1',
      stats: {
        general: {
          kill: 9,
          death: 9,
          assist: 5,
          kdaString: '1.56:1',
          cs: 181,
          csPerMin: 7.5,
          contributionForKillRate: '5%',
          goldEarned: 5577,
          totalDamageDealtToChampions: 5898,
          largestMultiKillString: '',
          opScoreBadge: ''
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2
        }
      },
      mapInfo: null,
      peak: [
        'https://opgg-static.akamaized.net/images/lol/perk/8229.png',
        'https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png'
      ],
      isWin: true
    },
    {
      mmr: 2337,
      champion: {
        imageUrl:
          'https://opgg-static.akamaized.net/images/lol/champion/Galio.png',
        level: 20
      },
      spells: [
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png'
        },
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png'
        }
      ],
      items: [
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/1056.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/1056.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/1056.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3113.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3364.png'
        }
      ],
      needRenew: false,
      gameId: '147142375',
      createDate: 1661202939,
      gameLength: 3466,
      gameType: '일반',
      summonerId: '35205750',
      summonerName: 'Hide on bush',
      tierRankShort: 'C1',
      stats: {
        general: {
          kill: 7,
          death: 10,
          assist: 5,
          kdaString: '1.20:1',
          cs: 116,
          csPerMin: 7.5,
          contributionForKillRate: '31%',
          goldEarned: 3975,
          totalDamageDealtToChampions: 574,
          largestMultiKillString: '',
          opScoreBadge: ''
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2
        }
      },
      mapInfo: null,
      peak: [
        'https://opgg-static.akamaized.net/images/lol/perk/8229.png',
        'https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png'
      ],
      isWin: false
    },
    {
      mmr: 2677,
      champion: {
        imageUrl:
          'https://opgg-static.akamaized.net/images/lol/champion/Tristana.png',
        level: 7
      },
      spells: [
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png'
        },
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png'
        }
      ],
      items: [
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/2031.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/2031.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/2031.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3364.png'
        }
      ],
      needRenew: false,
      gameId: '135986461',
      createDate: 1661200578,
      gameLength: 499,
      gameType: '일반',
      summonerId: '35205750',
      summonerName: 'Hide on bush',
      tierRankShort: 'C1',
      stats: {
        general: {
          kill: 7,
          death: 10,
          assist: 4,
          kdaString: '1.10:1',
          cs: 108,
          csPerMin: 7.5,
          contributionForKillRate: '42%',
          goldEarned: 3211,
          totalDamageDealtToChampions: 4933,
          largestMultiKillString: '',
          opScoreBadge: ''
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2
        }
      },
      mapInfo: null,
      peak: [
        'https://opgg-static.akamaized.net/images/lol/perk/8229.png',
        'https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png'
      ],
      isWin: true
    },
    {
      mmr: 396,
      champion: {
        imageUrl:
          'https://opgg-static.akamaized.net/images/lol/champion/Qiyana.png',
        level: 3
      },
      spells: [
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png'
        },
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png'
        }
      ],
      items: [
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3113.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3113.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3364.png'
        }
      ],
      needRenew: false,
      gameId: '361559614',
      createDate: 1661197618,
      gameLength: 1540,
      gameType: '무작위 총력전',
      summonerId: '35205750',
      summonerName: 'Hide on bush',
      tierRankShort: 'C1',
      stats: {
        general: {
          kill: 10,
          death: 2,
          assist: 3,
          kdaString: '6.50:1',
          cs: 121,
          csPerMin: 7.5,
          contributionForKillRate: '47%',
          goldEarned: 4289,
          totalDamageDealtToChampions: 4033,
          largestMultiKillString: 'Double Kill',
          opScoreBadge: 'ACE'
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2
        }
      },
      mapInfo: null,
      peak: [
        'https://opgg-static.akamaized.net/images/lol/perk/8229.png',
        'https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png'
      ],
      isWin: true
    },
    {
      mmr: 1065,
      champion: {
        imageUrl:
          'https://opgg-static.akamaized.net/images/lol/champion/Viktor.png',
        level: 11
      },
      spells: [
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png'
        },
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png'
        }
      ],
      items: [
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3020.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3340.png'
        }
      ],
      needRenew: false,
      gameId: '82390778',
      createDate: 1661194454,
      gameLength: 2716,
      gameType: '솔랭',
      summonerId: '35205750',
      summonerName: 'Hide on bush',
      tierRankShort: 'C1',
      stats: {
        general: {
          kill: 4,
          death: 3,
          assist: 3,
          kdaString: '2.33:1',
          cs: 101,
          csPerMin: 7.5,
          contributionForKillRate: '10%',
          goldEarned: 4108,
          totalDamageDealtToChampions: 739,
          largestMultiKillString: 'Double Kill',
          opScoreBadge: ''
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2
        }
      },
      mapInfo: null,
      peak: [
        'https://opgg-static.akamaized.net/images/lol/perk/8229.png',
        'https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png'
      ],
      isWin: true
    },
    {
      mmr: null,
      champion: {
        imageUrl:
          'https://opgg-static.akamaized.net/images/lol/champion/Viktor.png',
        level: 11
      },
      spells: [
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png'
        },
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png'
        }
      ],
      items: [
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3113.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3340.png'
        }
      ],
      needRenew: false,
      gameId: '432887163',
      createDate: 1661192163,
      gameLength: 21,
      gameType: '일반',
      summonerId: '35205750',
      summonerName: 'Hide on bush',
      tierRankShort: 'C1',
      stats: {
        general: {
          kill: 0,
          death: 0,
          assist: 0,
          kdaString: '0.00:1',
          cs: 180,
          csPerMin: 7.5,
          contributionForKillRate: '15%',
          goldEarned: 5052,
          totalDamageDealtToChampions: 3895,
          largestMultiKillString: 'Double Kill',
          opScoreBadge: ''
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2
        }
      },
      mapInfo: null,
      peak: [
        'https://opgg-static.akamaized.net/images/lol/perk/8229.png',
        'https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png'
      ],
      isWin: false
    },
    {
      mmr: 3337,
      champion: {
        imageUrl:
          'https://opgg-static.akamaized.net/images/lol/champion/Anivia.png',
        level: 31
      },
      spells: [
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png'
        },
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png'
        }
      ],
      items: [
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/1056.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3364.png'
        }
      ],
      needRenew: false,
      gameId: '421973782',
      createDate: 1661189569,
      gameLength: 400,
      gameType: '솔랭',
      summonerId: '35205750',
      summonerName: 'Hide on bush',
      tierRankShort: 'C1',
      stats: {
        general: {
          kill: 2,
          death: 10,
          assist: 3,
          kdaString: '0.50:1',
          cs: 145,
          csPerMin: 7.5,
          contributionForKillRate: '21%',
          goldEarned: 1298,
          totalDamageDealtToChampions: 1176,
          largestMultiKillString: '',
          opScoreBadge: ''
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2
        }
      },
      mapInfo: null,
      peak: [
        'https://opgg-static.akamaized.net/images/lol/perk/8229.png',
        'https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png'
      ],
      isWin: false
    },
    {
      mmr: 2757,
      champion: {
        imageUrl:
          'https://opgg-static.akamaized.net/images/lol/champion/Viktor.png',
        level: 11
      },
      spells: [
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png'
        },
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png'
        }
      ],
      items: [
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/1026.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/2031.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3340.png'
        }
      ],
      needRenew: false,
      gameId: '302207504',
      createDate: 1661186374,
      gameLength: 2569,
      gameType: '자유 5:5 랭크',
      summonerId: '35205750',
      summonerName: 'Hide on bush',
      tierRankShort: 'C1',
      stats: {
        general: {
          kill: 6,
          death: 3,
          assist: 3,
          kdaString: '3.00:1',
          cs: 189,
          csPerMin: 7.5,
          contributionForKillRate: '22%',
          goldEarned: 1800,
          totalDamageDealtToChampions: 3953,
          largestMultiKillString: 'Double Kill',
          opScoreBadge: ''
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2
        }
      },
      mapInfo: null,
      peak: [
        'https://opgg-static.akamaized.net/images/lol/perk/8229.png',
        'https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png'
      ],
      isWin: false
    },
    {
      mmr: 1189,
      champion: {
        imageUrl:
          'https://opgg-static.akamaized.net/images/lol/champion/Galio.png',
        level: 20
      },
      spells: [
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png'
        },
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png'
        }
      ],
      items: [
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3113.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3113.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/1026.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/1056.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/2031.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3340.png'
        }
      ],
      needRenew: false,
      gameId: '171781741',
      createDate: 1661182801,
      gameLength: 3041,
      gameType: '솔랭',
      summonerId: '35205750',
      summonerName: 'Hide on bush',
      tierRankShort: 'C1',
      stats: {
        general: {
          kill: 9,
          death: 4,
          assist: 2,
          kdaString: '2.75:1',
          cs: 160,
          csPerMin: 7.5,
          contributionForKillRate: '51%',
          goldEarned: 2422,
          totalDamageDealtToChampions: 1978,
          largestMultiKillString: 'Double Kill',
          opScoreBadge: 'ACE'
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2
        }
      },
      mapInfo: null,
      peak: [
        'https://opgg-static.akamaized.net/images/lol/perk/8229.png',
        'https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png'
      ],
      isWin: true
    },
    {
      mmr: 1264,
      champion: {
        imageUrl:
          'https://opgg-static.akamaized.net/images/lol/champion/Galio.png',
        level: 20
      },
      spells: [
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png'
        },
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png'
        }
      ],
      items: [
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/1056.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3020.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3198.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3113.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3020.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3364.png'
        }
      ],
      needRenew: false,
      gameId: '368714290',
      createDate: 1661179861,
      gameLength: 629,
      gameType: '일반',
      summonerId: '35205750',
      summonerName: 'Hide on bush',
      tierRankShort: 'C1',
      stats: {
        general: {
          kill: 10,
          death: 2,
          assist: 3,
          kdaString: '6.50:1',
          cs: 189,
          csPerMin: 7.5,
          contributionForKillRate: '9%',
          goldEarned: 955,
          totalDamageDealtToChampions: 863,
          largestMultiKillString: '',
          opScoreBadge: 'ACE'
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2
        }
      },
      mapInfo: null,
      peak: [
        'https://opgg-static.akamaized.net/images/lol/perk/8229.png',
        'https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png'
      ],
      isWin: true
    },
    {
      mmr: 1075,
      champion: {
        imageUrl:
          'https://opgg-static.akamaized.net/images/lol/champion/Viktor.png',
        level: 11
      },
      spells: [
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png'
        },
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png'
        }
      ],
      items: [
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/1026.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3020.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3198.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3198.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3364.png'
        }
      ],
      needRenew: false,
      gameId: '54471556',
      createDate: 1661177569,
      gameLength: 1090,
      gameType: '솔랭',
      summonerId: '35205750',
      summonerName: 'Hide on bush',
      tierRankShort: 'C1',
      stats: {
        general: {
          kill: 4,
          death: 5,
          assist: 3,
          kdaString: '1.40:1',
          cs: 152,
          csPerMin: 7.5,
          contributionForKillRate: '1%',
          goldEarned: 418,
          totalDamageDealtToChampions: 4324,
          largestMultiKillString: '',
          opScoreBadge: 'ACE'
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2
        }
      },
      mapInfo: null,
      peak: [
        'https://opgg-static.akamaized.net/images/lol/perk/8229.png',
        'https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png'
      ],
      isWin: true
    },
    {
      mmr: 500,
      champion: {
        imageUrl:
          'https://opgg-static.akamaized.net/images/lol/champion/Viktor.png',
        level: 11
      },
      spells: [
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png'
        },
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png'
        }
      ],
      items: [
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3113.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3020.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3020.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3340.png'
        }
      ],
      needRenew: false,
      gameId: '136668066',
      createDate: 1661174733,
      gameLength: 3582,
      gameType: '자유 5:5 랭크',
      summonerId: '35205750',
      summonerName: 'Hide on bush',
      tierRankShort: 'C1',
      stats: {
        general: {
          kill: 6,
          death: 2,
          assist: 4,
          kdaString: '5.00:1',
          cs: 103,
          csPerMin: 7.5,
          contributionForKillRate: '57%',
          goldEarned: 3442,
          totalDamageDealtToChampions: 1375,
          largestMultiKillString: '',
          opScoreBadge: ''
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2
        }
      },
      mapInfo: null,
      peak: [
        'https://opgg-static.akamaized.net/images/lol/perk/8229.png',
        'https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png'
      ],
      isWin: false
    },
    {
      mmr: 3488,
      champion: {
        imageUrl:
          'https://opgg-static.akamaized.net/images/lol/champion/Viktor.png',
        level: 11
      },
      spells: [
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png'
        },
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png'
        }
      ],
      items: [
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3020.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3113.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3340.png'
        }
      ],
      needRenew: false,
      gameId: '203204333',
      createDate: 1661172020,
      gameLength: 3086,
      gameType: '무작위 총력전',
      summonerId: '35205750',
      summonerName: 'Hide on bush',
      tierRankShort: 'C1',
      stats: {
        general: {
          kill: 5,
          death: 10,
          assist: 3,
          kdaString: '0.80:1',
          cs: 109,
          csPerMin: 7.5,
          contributionForKillRate: '20%',
          goldEarned: 5165,
          totalDamageDealtToChampions: 4012,
          largestMultiKillString: '',
          opScoreBadge: 'ACE'
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2
        }
      },
      mapInfo: null,
      peak: [
        'https://opgg-static.akamaized.net/images/lol/perk/8229.png',
        'https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png'
      ],
      isWin: true
    },
    {
      mmr: 3072,
      champion: {
        imageUrl:
          'https://opgg-static.akamaized.net/images/lol/champion/Qiyana.png',
        level: 3
      },
      spells: [
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png'
        },
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png'
        }
      ],
      items: [
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3020.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3113.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3364.png'
        }
      ],
      needRenew: false,
      gameId: '275420401',
      createDate: 1661168977,
      gameLength: 2865,
      gameType: '자유 5:5 랭크',
      summonerId: '35205750',
      summonerName: 'Hide on bush',
      tierRankShort: 'C1',
      stats: {
        general: {
          kill: 2,
          death: 6,
          assist: 5,
          kdaString: '1.17:1',
          cs: 155,
          csPerMin: 7.5,
          contributionForKillRate: '12%',
          goldEarned: 3633,
          totalDamageDealtToChampions: 2263,
          largestMultiKillString: 'Double Kill',
          opScoreBadge: ''
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2
        }
      },
      mapInfo: null,
      peak: [
        'https://opgg-static.akamaized.net/images/lol/perk/8229.png',
        'https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png'
      ],
      isWin: false
    },
    {
      mmr: 366,
      champion: {
        imageUrl:
          'https://opgg-static.akamaized.net/images/lol/champion/Lucian.png',
        level: 9
      },
      spells: [
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png'
        },
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png'
        }
      ],
      items: [
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/1056.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3198.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/2031.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3364.png'
        }
      ],
      needRenew: false,
      gameId: '156433048',
      createDate: 1661165923,
      gameLength: 2976,
      gameType: '솔랭',
      summonerId: '35205750',
      summonerName: 'Hide on bush',
      tierRankShort: 'C1',
      stats: {
        general: {
          kill: 4,
          death: 3,
          assist: 4,
          kdaString: '2.67:1',
          cs: 117,
          csPerMin: 7.5,
          contributionForKillRate: '24%',
          goldEarned: 3890,
          totalDamageDealtToChampions: 6156,
          largestMultiKillString: '',
          opScoreBadge: ''
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2
        }
      },
      mapInfo: null,
      peak: [
        'https://opgg-static.akamaized.net/images/lol/perk/8229.png',
        'https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png'
      ],
      isWin: false
    },
    {
      mmr: 2283,
      champion: {
        imageUrl:
          'https://opgg-static.akamaized.net/images/lol/champion/Anivia.png',
        level: 31
      },
      spells: [
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png'
        },
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png'
        }
      ],
      items: [
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3113.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3364.png'
        }
      ],
      needRenew: false,
      gameId: '30423691',
      createDate: 1661162690,
      gameLength: 1159,
      gameType: '자유 5:5 랭크',
      summonerId: '35205750',
      summonerName: 'Hide on bush',
      tierRankShort: 'C1',
      stats: {
        general: {
          kill: 7,
          death: 5,
          assist: 4,
          kdaString: '2.20:1',
          cs: 110,
          csPerMin: 7.5,
          contributionForKillRate: '26%',
          goldEarned: 4367,
          totalDamageDealtToChampions: 54,
          largestMultiKillString: '',
          opScoreBadge: ''
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2
        }
      },
      mapInfo: null,
      peak: [
        'https://opgg-static.akamaized.net/images/lol/perk/8229.png',
        'https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png'
      ],
      isWin: false
    },
    {
      mmr: 1007,
      champion: {
        imageUrl:
          'https://opgg-static.akamaized.net/images/lol/champion/Qiyana.png',
        level: 3
      },
      spells: [
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png'
        },
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png'
        }
      ],
      items: [
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3020.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3113.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3113.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3364.png'
        }
      ],
      needRenew: false,
      gameId: '112800435',
      createDate: 1661160555,
      gameLength: 2310,
      gameType: '무작위 총력전',
      summonerId: '35205750',
      summonerName: 'Hide on bush',
      tierRankShort: 'C1',
      stats: {
        general: {
          kill: 2,
          death: 7,
          assist: 1,
          kdaString: '0.43:1',
          cs: 188,
          csPerMin: 7.5,
          contributionForKillRate: '45%',
          goldEarned: 3335,
          totalDamageDealtToChampions: 6176,
          largestMultiKillString: 'Double Kill',
          opScoreBadge: 'ACE'
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2
        }
      },
      mapInfo: null,
      peak: [
        'https://opgg-static.akamaized.net/images/lol/perk/8229.png',
        'https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png'
      ],
      isWin: true
    },
    {
      mmr: 2058,
      champion: {
        imageUrl:
          'https://opgg-static.akamaized.net/images/lol/champion/Tristana.png',
        level: 7
      },
      spells: [
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png'
        },
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png'
        }
      ],
      items: [
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/1026.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3198.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/1056.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3364.png'
        }
      ],
      needRenew: false,
      gameId: '456129467',
      createDate: 1661157597,
      gameLength: 1275,
      gameType: '자유 5:5 랭크',
      summonerId: '35205750',
      summonerName: 'Hide on bush',
      tierRankShort: 'C1',
      stats: {
        general: {
          kill: 3,
          death: 3,
          assist: 1,
          kdaString: '1.33:1',
          cs: 174,
          csPerMin: 7.5,
          contributionForKillRate: '13%',
          goldEarned: 1119,
          totalDamageDealtToChampions: 3956,
          largestMultiKillString: 'Double Kill',
          opScoreBadge: ''
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2
        }
      },
      mapInfo: null,
      peak: [
        'https://opgg-static.akamaized.net/images/lol/perk/8229.png',
        'https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png'
      ],
      isWin: true
    },
    {
      mmr: 1723,
      champion: {
        imageUrl:
          'https://opgg-static.akamaized.net/images/lol/champion/Lucian.png',
        level: 9
      },
      spells: [
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png'
        },
        {
          imageUrl:
            'https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png'
        }
      ],
      items: [
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/1056.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3198.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/2031.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/1056.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/1026.png'
        },
        {
          imageUrl: 'https://opgg-static.akamaized.net/images/lol/item/3340.png'
        }
      ],
      needRenew: false,
      gameId: '174032035',
      createDate: 1661155273,
      gameLength: 1102,
      gameType: '자유 5:5 랭크',
      summonerId: '35205750',
      summonerName: 'Hide on bush',
      tierRankShort: 'C1',
      stats: {
        general: {
          kill: 9,
          death: 4,
          assist: 3,
          kdaString: '3.00:1',
          cs: 149,
          csPerMin: 7.5,
          contributionForKillRate: '23%',
          goldEarned: 3703,
          totalDamageDealtToChampions: 6605,
          largestMultiKillString: '',
          opScoreBadge: ''
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2
        }
      },
      mapInfo: null,
      peak: [
        'https://opgg-static.akamaized.net/images/lol/perk/8229.png',
        'https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png'
      ],
      isWin: false
    }
  ],
  champions: [
    {
      id: 266,
      key: 'Aatrox',
      name: '아트록스',
      imageUrl:
        'https://opgg-static.akamaized.net/images/lol/champion/Aatrox.png?image=q_auto&v=1591083841',
      games: 16,
      kills: 10,
      deaths: 12,
      assists: 7,
      wins: 3,
      losses: 13
    },
    {
      id: 3,
      key: 'Galio',
      name: '갈리오',
      imageUrl:
        'https://opgg-static.akamaized.net/images/lol/champion/Galio.png?image=w_30&v=1',
      games: 4,
      kills: 14,
      deaths: 18,
      assists: 10,
      wins: 3,
      losses: 1
    }
  ],
  positions: [
    {
      games: 6,
      wins: 1,
      losses: 5,
      position: 'ADC',
      positionName: 'Bottom'
    },
    {
      games: 14,
      wins: 5,
      losses: 9,
      position: 'ADC',
      positionName: 'Bottom'
    }
  ],
  summary: {
    wins: 6,
    losses: 14,
    kills: 24,
    deaths: 30,
    assists: 17
  }
};
