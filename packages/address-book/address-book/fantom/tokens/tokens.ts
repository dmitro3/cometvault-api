import { ConstRecord } from '../../../types/const';
import Token from '../../../types/token';

const ETH = {
  name: 'Wrapped Ether',
  address: '0x74b23882a30290451A17c44f4F05243b6b58C76d',
  symbol: 'ETH',
  decimals: 18,
  chainId: 250,
  website: 'https://ethereum.org/',
  description:
    'The native currency that flows within the Ethereum economy is called Ether (ETH). Ether is typically used to pay for transaction fees called Gas, and it is the base currency of the network.',
  logoURI: 'https://ftmscan.com/token/images/wETH_32.png',
} as const;

const BTC = {
  name: 'Wrapped Bitcoin',
  address: '0x321162Cd933E2Be498Cd2267a90534A804051b11',
  symbol: 'BTC',
  decimals: 8,
  chainId: 250,
  website: 'https://wbtc.network/',
  description:
    'Wrapped Bitcoin (WBTC) is the first ERC20 token backed 1:1 with Bitcoin. Completely transparent. 100% verifiable. Community led.',
  logoURI: 'https://ftmscan.com/token/images/wBTC_32.png',
} as const;

const FTM = {
  name: 'Wrapped Fantom',
  address: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
  symbol: 'WFTM',
  decimals: 18,
  chainId: 250,
  website: 'https://fantom.foundation/',
  description:
    'Fantom is a fast, high-throughput open-source smart contract platform for digital assets and dApps.',
  logoURI: 'https://ftmscan.com/token/images/wFtm_32.png',
} as const;

const _tokens = {
  CHARM: {
    name: 'CHARM',
    symbol: 'CHARM',
    address: '0x248CB87DDA803028dfeaD98101C9465A2fbdA0d4',
    chainId: 250,
    decimals: 18,
    website: 'https://spartacadabra.money/',
    description:
      'Spartacadabra unlocks yield bearing assets and conjures magic stable coin Lambda (λ).',
    logoURI:
      'https://assets.coingecko.com/coins/images/21208/small/vXl4xT-P_400x400.png?1638567924',
  },
  UST: {
    name: 'USD Terra',
    symbol: 'UST',
    address: '0xe2D27f06F63d98b8e11b38b5b08A75D0c8dD62B9',
    chainId: 250,
    decimals: 18,
    website: 'https://www.terra.money/',
    description:
      'Terra stablecoins offer instant settlements, low fees and seamless cross-border exchange - loved by millions of users and merchants.',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7129.png',
  },
  SOL: {
    name: 'Solana',
    symbol: 'SOL',
    address: '0x44F7237df00E386af8e79B817D05ED9f6FE0f296',
    decimals: 18,
    chainId: 250,
    website: 'https://solana.com/',
    description:
      'Solana is the fastest blockchain in the world and the fastest growing ecosystem in crypto, with over 400 projects spanning DeFi, NFTs, Web3 and more.',
    logoURI: 'https://assets.coingecko.com/coins/images/4128/large/Solana.jpg?1635329178',
  },
  TUSD: {
    name: 'True USD',
    symbol: 'TUSD',
    address: '0x9879aBDea01a879644185341F7aF7d8343556B7a',
    decimals: 18,
    chainId: 250,
    website: 'https://www.trueusd.com/',
    description:
      'TrueUSD is one of a number of cryptocurrency stablecoins administered by TrustToken, a platform for tokenizing real-world assets.',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/200x200/2563.png',
  },
  JOE: {
    name: 'Joe Token',
    symbol: 'JOE',
    address: '0x9F47F313ACFd4bdC52F4373b493EaE7d5aC5b765',
    decimals: 18,
    chainId: 250,
    website: 'https://www.traderjoexyz.com/#/home',
    description:
      'Trader Joe is your one-stop decentralized trading platform on the Avalanche network, of which JOE is the governance token that rewards its holders with a share of exchange revenues.',
    logoURI: 'https://www.traderjoexyz.com/static/media/logo.bc60f78d.png',
  },
  SUMMIT: {
    name: 'SUMMIT',
    symbol: 'SUMMIT',
    address: '0x8F9bCCB6Dd999148Da1808aC290F2274b13D7994',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://assets.coingecko.com/coins/images/19389/small/CE2Sdy2.png',
    description: 'Introducing "Yield Multiplying" to the world of DeFi.',
    website: 'https://summitdefi.com/',
  },
  PEAR: {
    name: 'PearZap',
    symbol: 'PEAR',
    address: '0x7C10108d4B7f4bd659ee57A53b30dF928244b354',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://assets.coingecko.com/coins/images/17173/small/pear200.png',
    description: 'High yields farms & pools on the Polygon chain & Binance Smart Chain',
    website: 'https://fantom.pearzap.com/',
  },
  TAROT: {
    name: 'Tarot',
    symbol: 'TAROT',
    address: '0xC5e2B037D30a390e62180970B3aa4E91868764cD',
    chainId: 250,
    decimals: 18,
    website: 'https://www.tarot.to/',
    description:
      'Tarot is a decentralized lending protocol on Fantom Opera where users can participate as lenders or borrowers in isolated lending pools.',
    logoURI: 'https://assets.coingecko.com/coins/images/17881/large/tarot-200px.png?1629704943',
  },
  MAI: {
    name: 'Mai',
    symbol: 'miMATIC',
    address: '0xfB98B335551a418cD0737375a2ea0ded62Ea213b',
    chainId: 250,
    decimals: 18,
    website: 'https://www.mai.finance/',
    description:
      "MAI is a stable coin collateralized by assets. It's powered by Qi Dao, a protocol that enables any cryptocurrency community to create stablecoins backed by their native tokens.",
    logoURI: 'https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png',
  },
  BEETS: {
    name: 'Beethoven X Token',
    symbol: 'BEETS',
    address: '0xF24Bcf4d1e507740041C9cFd2DddB29585aDCe1e',
    chainId: 250,
    decimals: 18,
    website: 'https://beethovenx.io/',
    description:
      'BEETS is the governance token for the Beethoven X protocol. Built on Balancer V2, Beethoven X is the first next-generation AMM protocol on Fantom.',
    logoURI:
      'https://assets.coingecko.com/coins/images/19158/small/beets-icon-large.png?1634545465',
  },
  fSING: {
    name: 'Sing Token',
    symbol: 'SING',
    address: '0x53D831e1db0947c74e8a52618f662209ec5dE0cE',
    chainId: 250,
    decimals: 18,
    website: 'https://singular.farm/',
    description:
      'Singular is a multichain, decentralized, strategic yield farm running on Polygon, BSC, Fantom and Okchain. Users are incentivized with a triple farming system.',
    logoURI: 'https://github.com/singularfarm/assets/blob/main/400.png?raw=true',
  },
  GEIST: {
    name: 'GEIST',
    symbol: 'GEIST',
    address: '0xd8321AA83Fb0a4ECd6348D4577431310A6E0814d',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/18832/small/GEIST-token.png?1633560935',
    website: 'https://geist.finance/',
    description:
      'Geist is a decentralised non-custodial liquidity market protocol where users can participate as depositors or borrowers.',
  },
  fWINGS: {
    name: 'fWINGS',
    symbol: 'fWINGS',
    address: '0x3D8f1ACCEe8e263F837138829B6C4517473d0688',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://fantom-exchange.jetswap.finance/images/coins/wings.png',
    website: 'https://fantom.jetswap.finance/',
    description: 'JetSwap AMM',
  },
  STEAK: {
    name: 'SteakToken',
    symbol: 'STEAK',
    address: '0x05848B832E872d9eDd84AC5718D58f21fD9c9649',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://assets.spookyswap.finance/tokens/STEAK.png',
    website: 'https://stakesteak.com/',
    description:
      "StakeSteak's mission is to build lasting infrastructure to stabilize fUSD at $1.00",
  },
  FOO: {
    name: 'Fantums of Opera Token',
    symbol: 'FOO',
    address: '0xFbc3c04845162F067A0B6F8934383E63899c3524',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://assets.spookyswap.finance/tokens/FOO.png',
    website: 'https://fantums.com/',
    description: 'Fantums are Opera themed digital collectibles (NFTs) on the Fantom blockchain.',
  },
  ZOO: {
    name: 'ZooCoin',
    address: '0x09e145A1D53c0045F41aEEf25D8ff982ae74dD56',
    symbol: 'ZOO',
    decimals: 0,
    chainId: 250,
    website: 'https://zoocoin.cash/',
    description:
      'Zoo is an ecosystem of decentralized applications powered by Fantom network. Primary projects token (ZOO) is utilized within the ecosystem among various of developed and planned projects - portfolio monitoring solution ZooWallet, ZooPet (first ever NFT marketplace released on Fantom), charting provider ZooCharts, decentralized exchange ZooDex, trading insights aggregator ZooTrade and other.',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/200x200/9007.png',
  },
  MIM: {
    name: 'albracabra',
    address: '0x82f0B8B456c1A451378467398982d4834b6829c1',
    symbol: 'MIM',
    decimals: 18,
    chainId: 250,
    website: 'https://abracadabra.money/',
    description:
      'You, the Spellcaster, can provide collateral in the form of various interest bearing crypto assets such as yvYFI, yvUSDT, yvUSDC, xSUSHI and more. With this, you can borrow magic internet money (MIM) which is a stable coin that you can swap for any other traditional stable coin.',
    logoURI: '',
  },
  DIS: {
    name: 'TosDis',
    symbol: 'DIS',
    address: '0x0e121961DD741C9D49C9A04379da944A9D2FAc7a',
    chainId: 250,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0xf981547a1D9A0c59C9aba1e2b826BF01a2e5E263/logo.png',
    website: 'https://tosdis.finance/',
    description: 'The One Stop Defi Interoperable Solution powered with Liquid Staking',
  },
  BUSD: {
    name: 'Binance USD',
    address: '0xC931f61B1534EB21D8c11B24f3f5Ab2471d4aB50',
    symbol: 'BUSD',
    decimals: 18,
    chainId: 250,
    website: 'https://www.binance.com/en/busd/',
    description:
      'These are digitised US Dollars and are always purchased and redeemed at 1 BUSD for 1 US dollar.',
    logoURI: '',
  },
  SPIRIT: {
    name: 'SpiritSwap',
    address: '0x5Cc61A78F164885776AA610fb0FE1257df78E59B',
    symbol: 'SPIRIT',
    decimals: 18,
    chainId: 250,
    website: 'https://app.spiritswap.finance/#/',
    description:
      "SpiritSwap is a decentralized exchange (DEX) on the Fantom Opera Chain. SpiritSwap's design is based on the Uniswap constant-product automated market maker (AMM).",
    logoURI:
      'https://raw.githubusercontent.com/Layer3Org/spiritswap-tokens-list-icon/master/token-list/images/0x5Cc61A78F164885776AA610fb0FE1257df78E59B.png',
  },
  METEOR: {
    name: "METEOR",
    address: "0xBAFDCFC3787BF7833BE6Be8E2D9e822B610255C9",
    symbol: "METEOR",
    decimals: 18,
    chainId: 250,
    website: "https://cometfinance.io/",
    description:
      "Algorithmic Stablecoin pegged to FTM.",
    logoURI: "https://raw.githubusercontent.com/krypto-dev/comet-finance-assets/main/crypto_tomb_share-svg.png",
  },
  COMET: {
    name: "COMET",
    address: "0xbeBB20cD6364998b8cAfc3d6B86f1ca6363fF910",
    symbol: "COMET",
    decimals: 18,
    chainId: 250,
    website: "https://cometfinance.io/",
    description:
      "Algorithmic Stablecoin pegged to FTM.",
    logoURI: "https://raw.githubusercontent.com/krypto-dev/comet-finance-assets/main/crypto_tomb_cash-svg.png",
  },
  TSHARE: {
    name: 'TSHARE',
    address: '0x4cdF39285D7Ca8eB3f090fDA0C069ba5F4145B37',
    symbol: 'TSHARE',
    decimals: 18,
    chainId: 250,
    website: 'https://tomb.finance/',
    description:
      'TOMB Shares (TSHARE) are one of the ways to measure the value of the TOMB Protocol and shareholder trust in its ability to maintain TOMB close to peg. During epoch expansions the protocol mints TOMB and distributes it proportionally to all TSHARE holders who have staked their tokens in the Masonry (boardroom).',
    logoURI: 'https://assets.spookyswap.finance/tokens/TSHARE.png',
  },
  TOMB: {
    name: 'TOMB',
    address: '0x6c021Ae822BEa943b2E66552bDe1D2696a53fbB7',
    symbol: 'TOMB',
    decimals: 18,
    chainId: 250,
    website: 'https://tomb.finance/',
    description:
      'The first algorithmic stablecoin on Fantom Opera, pegged to the price of 1 FTM via seigniorage',
    logoURI: 'https://assets.spookyswap.finance/tokens/TOMB.png',
  },
  FTM,
  WFTM: FTM,
  WNATIVE: FTM,
  sFTM: {
    name: 'Staked FTM',
    address: '0x69c744D3444202d35a2783929a0F930f2FBB05ad',
    symbol: 'sFTM',
    decimals: 18,
    chainId: 250,
    website:
      'https://fantom.foundation/defi/?__cf_chl_jschl_tk__=pmd_vfkYw1Z8PZor5oxGKrd9bxYd66paY0bLiQmy1dKOLpY-1633331752-0-gqNtZGzNAdCjcnBszQlR',
    description:
      'Fantom offers the first DeFi stack built on an aBFT consensus. It’s much faster, cheaper, and more reliable and secure than its predecessors.',
    logoURI: 'https://repository.fantom.network/logos/sftm.svg',
  },
  fWTIOIL: {
    name: 'fWTI Oil',
    address: '0xe297e06761a5489380538A0308B6F9b4A53Bea45',
    symbol: 'fWTIOIL',
    decimals: 18,
    chainId: 250,
    website: 'https://fantom.foundation/defi/',
    description:
      'Fantom offers the first DeFi stack built on an aBFT consensus. It’s much faster, cheaper, and more reliable and secure than its predecessors.',
    logoURI: 'https://repository.fantom.network/logos/wti.svg',
  },
  fUSD: {
    name: 'frappedUSD',
    address: '0xAd84341756Bf337f5a0164515b1f6F993D194E1f',
    symbol: 'fUSD',
    decimals: 18,
    chainId: 250,
    website: 'https://frapped.io/',
    description: 'Frapped an innovative wrapper for USDT tokens.',
    logoURI: 'https://ftmscan.com/token/images/fUSD_32.png',
  },
  fSILVER: {
    name: 'fSilver',
    address: '0xf15e88EEf35BF4709A4C3E99c00358F9247D4531',
    symbol: 'fSILVER',
    decimals: 18,
    chainId: 250,
    website: 'https://fantom.foundation/defi/',
    description: 'Frapped an innovative wrapper for silver tokens.',
    logoURI: 'https://repository.fantom.network/logos/silver.svg',
  },
  fLINK: {
    name: 'fLINK',
    address: '0xA649A19423052dC6b320360B3C760884E095AC57',
    symbol: 'fLINK',
    decimals: 18,
    chainId: 250,
    website: 'https://fantom.foundation/defi/',
    description: 'Frapped an innovative wrapper for LINK tokens.',
    logoURI: 'https://repository.fantom.network/logos/link.svg',
  },
  fKRW: {
    name: 'fKRW',
    address: '0x2b9C073Ec670b70F417bbaf3BbB052AA563A0a23',
    symbol: 'fKRW',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://repository.fantom.network/logos/krw.svg',
  },
  fJPY: {
    name: 'fJPY',
    address: '0x3B74389bc23057325BaB96523DBec8c445F55799',
    symbol: 'fJPY',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://repository.fantom.network/logos/jpy.svg',
  },
  fGOLD: {
    name: 'fGold',
    address: '0x2202C52C9076A49400aaccf159e1956269eaa673',
    symbol: 'fGOLD',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://repository.fantom.network/logos/gold.svg',
  },
  fGBP: {
    name: 'fGBP',
    address: '0xcDE58e4B6c7b78B04da664Edb0a9752CC5FEDBd5',
    symbol: 'fGBP',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://repository.fantom.network/logos/gbp.svg',
  },
  fEUR: {
    name: 'fEUR',
    address: '0xe105621721D1293c27be7718e041a4Ce0EbB227E',
    symbol: 'fEUR',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://repository.fantom.network/logos/euro.svg',
  },
  fETH: {
    name: 'fETH',
    address: '0x658b0c7613e890EE50B8C4BC6A3f41ef411208aD',
    symbol: 'fETH',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://repository.fantom.network/logos/eth.svg',
  },
  fCNY: {
    name: 'fCNY',
    address: '0x24d39324CF3697Fd9Fd78714E8cdeB5Df66E3DCd',
    symbol: 'fCNY',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://repository.fantom.network/logos/cny.svg',
  },
  fCHF: {
    name: 'fCHF',
    address: '0x81740D647493a61329E1c574A11ee7577659fb14',
    symbol: 'fCHF',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://repository.fantom.network/logos/chf.svg',
  },
  fBTC: {
    name: 'fBTC',
    address: '0xe1146b9AC456fCbB60644c36Fd3F868A9072fc6E',
    symbol: 'fBTC',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://repository.fantom.network/logos/bitcoin.svg',
  },
  fBNB: {
    name: 'fBNB',
    address: '0x27f26F00e1605903645BbaBC0a73E35027Dccd45',
    symbol: 'fBNB',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://repository.fantom.network/logos/bnb.svg',
  },
  fBAND: {
    name: 'fBAND',
    address: '0x078EEF5A2fb533e1a4d487ef64b27DF113d12C32',
    symbol: 'fBAND',
    decimals: 18,
    chainId: 250,
    logoURI: 'https://repository.fantom.network/logos/band.svg',
  },
  LINK: {
    name: 'ChainLink',
    address: '0xb3654dc3D10Ea7645f8319668E8F54d2574FBdC8',
    symbol: 'LINK',
    decimals: 18,
    website: 'https://chain.link/',
    description:
      'Link is the currency used to pay the Chainlink node operators for their work. Chainlink node operators have to stake LINK in the network in order to participate and provide data services.',
    chainId: 250,
    logoURI: 'https://ftmscan.com/token/images/chainlink_32.png',
  },
  USDC: {
    name: 'USD Coin',
    address: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
    symbol: 'USDC',
    decimals: 6,
    website: 'https://www.circle.com/usdc',
    description:
      'USDC is a fully collateralized US dollar stablecoin. USDC is issued by regulated financial institutions, backed by fully reserved assets, redeemable on a 1:1 basis for US dollars.',
    chainId: 250,
    logoURI: 'https://ftmscan.com/token/images/USDC_32.png',
  },
  WBTC: {
    ...BTC,
    symbol: 'WBTC',
    website: 'https://wbtc.network/',
    description:
      'Wrapped Bitcoin (WBTC) is the first ERC20 token backed 1:1 with Bitcoin. Completely transparent. 100% verifiable. Community led.',
  },
  BTC: BTC,
  AAVE: {
    name: 'Aave',
    address: '0x6a07A792ab2965C72a5B8088d3a069A7aC3a993B',
    symbol: 'AAVE',
    decimals: 18,
    chainId: 250,
    website: 'https://aave.com/',
    description:
      'Aave is a decentralized non-custodial liquidity protocol where users can participate as depositors or borrowers. Depositors provide liquidity to the market to earn a passive income, while borrowers are able to borrow in an overcollateralized (perpetually) or undercollateralized (one-block liquidity) fashion.',
    logoURI: 'https://ftmscan.com/token/images/aave_32.png',
  },
  DAI: {
    name: 'Dai Stablecoin',
    address: '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E',
    symbol: 'DAI',
    decimals: 18,
    chainId: 250,
    website: 'https://makerdao.com/en/',
    description:
      'Dai is a stable, decentralized currency that does not discriminate. Any individual or business can realize the advantages of digital money.',
    logoURI: 'https://ftmscan.com/token/images/MCDDai_32.png',
  },
  SUSHI: {
    name: 'Sushi',
    address: '0xae75A438b2E0cB8Bb01Ec1E1e376De11D44477CC',
    symbol: 'SUSHI',
    decimals: 18,
    chainId: 250,
    website: 'https://sushi.com/',
    description:
      'Sushi is the home of DeFi. Their community is building a comprehensive, decentralized trading platform for the future of finance. Swap, earn, stack yields, lend, borrow, leverage all on one decentralized, community driven platform.',
    logoURI: 'https://ftmscan.com/token/images/sushiswap_32.png',
  },
  YFI: {
    name: 'yearn.finance',
    address: '0x29b0Da86e484E1C0029B56e817912d778aC0EC69',
    symbol: 'YFI',
    decimals: 18,
    chainId: 250,
    website: 'https://yearn.finance/',
    description:
      'Yearn Finance is a suite of products in Decentralized Finance (DeFi) that provides lending aggregation, yield generation, and insurance on the Ethereum blockchain. The protocol is maintained by various independent developers and is governed by YFI holders.',
    logoURI: 'https://ftmscan.com/token/images/YFI_32.png',
  },
  CRV: {
    name: 'Curve DAO',
    address: '0x1E4F97b9f9F913c46F1632781732927B9019C68b',
    symbol: 'CRV',
    decimals: 18,
    chainId: 250,
    website: 'https://curve.fi/',
    description:
      'Curve is an exchange liquidity pool on Ethereum. Curve is designed for extremely efficient stablecoin trading and low risk, supplemental fee income for liquidity providers, without an opportunity cost.',
    logoURI: 'https://ftmscan.com/token/images/CurveFi_32.png',
  },
  BAND: {
    name: 'Band',
    address: '0x46E7628E8b4350b2716ab470eE0bA1fa9e76c6C5',
    symbol: 'BAND',
    decimals: 18,
    chainId: 250,
    website: 'https://bandprotocol.com/',
    description:
      'Band Protocol is a cross-chain data oracle platform that aggregates and connects real-world data and APIs to smart contracts.',
    logoURI: 'https://ftmscan.com/token/images/bandprotocol_32.png',
  },
  SFI: {
    name: 'Spice',
    address: '0x924828a9Fb17d47D0eb64b57271D10706699Ff11',
    symbol: 'SFI',
    decimals: 18,
    chainId: 250,
    website: 'https://scifi.finance/',
    description:
      'The SPICE DAO is a decentralised community that launches and governs tokenised investment funds.',
    logoURI: 'https://ftmscan.com/token/images/saffron_32.png',
  },
  HEGIC: {
    name: 'Hegic',
    address: '0x44B26E839eB3572c5E959F994804A5De66600349',
    symbol: 'HEGIC',
    decimals: 18,
    chainId: 250,
    website: 'https://www.hegic.co/',
    description:
      'Trade non-custodial options for profits or to hedge your positions. Enjoy fixed price and unlimited upside of the options contracts.',
    logoURI: 'https://ftmscan.com/token/images/hegic_32.png',
  },
  anyFRAX: {
    name: 'Frax',
    address: '0xaf319E5789945197e365E7f7fbFc56B130523B33',
    symbol: 'FRAX',
    decimals: 18,
    chainId: 250,
    website: 'https://frax.finance/',
    description:
      'The Frax Protocol introduced the world to the concept of a cryptocurrency being partially backed by collateral and partially stabilized algorithmically.',
    logoURI: 'https://ftmscan.com/token/images/fraxfinance_32.png',
  },
  FRAX: {
    name: 'Frax',
    address: '0xdc301622e621166BD8E82f2cA0A26c13Ad0BE355',
    symbol: 'FRAX',
    decimals: 18,
    chainId: 250,
    website: 'https://frax.finance/',
    description:
      'The Frax Protocol introduced the world to the concept of a cryptocurrency being partially backed by collateral and partially stabilized algorithmically.',
    logoURI: 'https://ftmscan.com/token/images/fraxfinance_32.png',
  },
  COVER: {
    name: 'Cover',
    address: '0xB01E8419d842beebf1b70A7b5f7142abbaf7159D',
    symbol: 'COVER',
    decimals: 18,
    chainId: 250,
    website: 'https://www.coverprotocol.com/',
    description:
      'Cover Protocol provides peer to peer coverage with fungible tokens. It lets the market set coverage prices as opposed to a bonding curve.',
    logoURI: 'https://ftmscan.com/token/images/cover_32.png',
  },
  KP3R: {
    name: 'Keep3r',
    address: '0x2A5062D22adCFaAfbd5C541d4dA82E4B450d4212',
    symbol: 'KP3R',
    decimals: 18,
    chainId: 250,
    website: 'https://keep3r.network/',
    description:
      'Keep3r Network is a decentralized keeper network for projects that need external devops and for external teams to find keeper jobs.',
    logoURI: 'https://ftmscan.com/token/images/kp3r_32.png',
  },
  WETH: {
    ...ETH,
    symbol: 'WETH',
  },
  ETH: ETH,
  CREAM: {
    name: 'Cream',
    address: '0x657A1861c15A3deD9AF0B6799a195a249ebdCbc6',
    symbol: 'CREAM',
    decimals: 18,
    chainId: 250,
    website: 'https://app.cream.finance/',
    description:
      'C.R.E.A.M. Finance is a decentralized lending protocol for individuals, institutions and protocols to access financial services.',
    logoURI: 'https://ftmscan.com/token/images/CreamFinance_32.png',
  },
  sUSD: {
    name: 'Synth sUSD',
    address: '0x0E1694483eBB3b74d3054E383840C6cf011e518e',
    symbol: 'sUSD',
    decimals: 18,
    chainId: 250,
    website: 'https://synthetix.io/',
    description:
      'Tracks the price of a single US dollar (USD). The synth always remains at a constant of 1.',
    logoURI: 'https://ftmscan.com/token/images/sUSD_32.png',
  },
  SNX: {
    name: 'Synthetix Network',
    address: '0x56ee926bD8c72B2d5fa1aF4d9E4Cbb515a1E3Adc',
    symbol: 'SNX',
    decimals: 18,
    chainId: 250,
    website: 'https://synthetix.io/',
    description:
      'Synthetix is the backbone for derivatives trading in DeFi, allowing anyone, anywhere to gain on-chain exposure to a vast range of assets.',
    logoURI: 'https://ftmscan.com/token/images/Synthetix_SNX_32.png',
  },
  ICE: {
    name: 'IceToken',
    address: '0xf16e81dce15B08F326220742020379B855B87DF9',
    symbol: 'ICE',
    decimals: 18,
    chainId: 250,
    website: 'https://popsicle.finance/',
    description:
      'Popsicle is a next-gen cross-chain yield enhancement platform focusing on Automated Market-Making (AMM) Liquidity Providers (LP).',
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0xf16e81dce15B08F326220742020379B855B87DF9/logo.png',
  },
  fUSDT: {
    name: 'Frapped USDT',
    address: '0x049d68029688eAbF473097a2fC38ef61633A3C7A',
    symbol: 'fUSDT',
    decimals: 6,
    chainId: 250,
    website: 'https://frapped.io/',
    description: 'Frapped an innovative wrapper for USDT tokens.',
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
  },
  BADGER: {
    name: 'Badger',
    address: '0x753fbc5800a8C8e3Fb6DC6415810d627A387Dfc9',
    symbol: 'BADGER',
    decimals: 18,
    chainId: 250,
    website: 'https://badger.finance/',
    description: 'DAO dedicated to building products and infrastructure to bring Bitcoin to DeFi.',
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x3472A5A71965499acd81997a54BBA8D852C6E53d/logo.png',
  },
  BIFI: {
    name: 'Beefy.Finance',
    symbol: 'BIFI',
    address: '0xd6070ae98b8069de6B494332d1A1a81B6179D960',
    chainId: 250,
    decimals: 18,
    website: 'https://www.beefy.finance/',
    description:
      'Beefy Finance is a Decentralized, Multi-Chain Yield Optimizer platform that allows its users to earn compound interest on their crypto holdings.',
    logoURI:
      'https://raw.githubusercontent.com/beefyfinance/beefy-app/prod/src/images/single-assets/BIFI.png',
  },
  ANY: {
    name: 'AnySwap',
    symbol: 'ANY',
    address: '0xdDcb3fFD12750B45d32E084887fdf1aABAb34239',
    chainId: 250,
    decimals: 18,
    website: 'https://anyswap.exchange/dashboard',
    description:
      'Anyswap is a fully decentralized cross chain swap protocol, based on Fusion DCRM technology, with automated pricing and liquidity system.',
    logoURI: 'https://ftmscan.com/token/images/anyswap_32.png',
  },
  WOOFY: {
    name: 'Woofy',
    symbol: 'WOOFY',
    address: '0xD0660cD418a64a1d44E9214ad8e459324D8157f1',
    chainId: 250,
    decimals: 12,
    website: 'https://woofy.finance/',
    description:
      'The WOOFY token is the blue dog companion token of YFI. Utilizing special Woof technology, it allows two-way conversion between the two tokens, allowing holders to be exposed to YFI in a fluffier package.',
    logoURI:
      'https://raw.githubusercontent.com/yearn/yearn-assets/master/icons/tokens/0xD0660cD418a64a1d44E9214ad8e459324D8157f1/logo-128.png',
  },
  BNB: {
    name: 'Binance Chain',
    symbol: 'BNB',
    address: '0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454',
    chainId: 250,
    decimals: 18,
    website: 'https://www.binance.com/',
    description:
      'Binance Coin (BNB) is an exchange-based token created and issued by the cryptocurrency exchange Binance. Initially created on the Ethereum blockchain as an ERC-20 token in July 2017, BNB was migrated over to Binance Chain in February 2019 and became the native coin of the Binance Chain.',
    logoURI: 'https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png',
  },
  BOO: {
    name: 'Spooky Swap',
    symbol: 'BOO',
    address: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
    chainId: 250,
    decimals: 18,
    website: 'https://spookyswap.finance/',
    description:
      "SpookySwap is an automated market-making (AMM) decentralized exchange (DEX) for the Fantom Opera network. Different from other DEXs, we're invested in building a strong foundation with our BOO token as a governance token, diverse farms, grants to encourage a healthy ecology of other Fantom projects, and user-centered service.",
    logoURI: 'https://assets.spookyswap.finance/tokens/BOO.png',
  },
  SCREAM: {
    name: 'Scream Finance',
    symbol: 'SCREAM',
    address: '0xe0654C8e6fd4D733349ac7E09f6f23DA256bF475',
    chainId: 250,
    decimals: 18,
    website: 'https://scream.sh',
    description:
      'SCREAM is a highly-scalable decentralised lending protocol built and powered by the Fantom Blockchain.',
    logoURI: 'https://scream.sh/img/scream-multi.png',
  },
  KEK: {
    name: 'KEK',
    symbol: 'KEK',
    address: '0x627524d78B4fC840C887ffeC90563c7A42b671fD',
    chainId: 250,
    decimals: 18,
    website: 'https://kek.tools/',
    description: 'A token tracker on the fantom network',
    logoURI: 'https://scream.sh/img/scream-multi.png',
  },
  TREEB: {
    name: 'retreeb',
    symbol: 'TREEB',
    address: '0xc60D7067dfBc6f2caf30523a064f416A5Af52963',
    chainId: 250,
    decimals: 18,
    website: 'https://retreeb.io/',
    description:
      'Discover retreeb, a new decentralized way to pay, simple, practical, economical, which allows you to act in accordance with the universal values of ethics, sharing and solidarity.',
    logoURI: 'https://assets.spookyswap.finance/tokens/TREEB.png',
  },
  WOO: {
    name: 'Woo Exchange',
    symbol: 'WOO',
    address: '0x6626c47c00F1D87902fc13EECfaC3ed06D5E8D8a',
    chainId: 250,
    decimals: 18,
    website: 'https://woo.org/',
    description:
      'Featuring deep liquidity for superior order execution, zero-fee trading, and fully customizable trading workspaces.',
    logoURI: 'https://assets.spookyswap.finance/tokens/WOO.png',
  },
  SHADE: {
    name: 'Shade Cash',
    symbol: 'SHADE',
    address: '0x3A3841f5fa9f2c283EA567d5Aeea3Af022dD2262',
    chainId: 250,
    decimals: 18,
    website: 'https://shade.cash/',
    description: 'A decentralized protocol for private transactions on Fantom Opera',
    logoURI: 'https://assets.spookyswap.finance/tokens/SHADE.png',
  },
  JUST: {
    name: 'JustYours',
    symbol: 'JUST',
    address: '0x37C045bE4641328DFEB625f1Dde610D061613497',
    chainId: 250,
    decimals: 10,
    website: 'https://justyours.me/',
    description:
      'JustYours is building a multi-functional platform that can seamlessly integrate both users and creators of Adult Content',
    logoURI: 'https://app.spiritswap.finance/images/tokens/JUST.png',
  },
  SPELL: {
    name: 'Spell Token',
    symbol: 'SPELL',
    address: '0x468003B688943977e6130F4F68F23aad939a1040',
    chainId: 250,
    decimals: 18,
    website: 'https://abracadabra.money/',
    description: 'SPELL is the incentivation token of Abracadabra.money',
    logoURI: 'https://app.spiritswap.finance/images/tokens/SPELL.png',
  },
  sSPELL: {
    name: 'Staked Spell Token',
    symbol: 'sSPELL',
    address: '0xbB29D2A58d880Af8AA5859e30470134dEAf84F2B',
    chainId: 250,
    decimals: 18,
    website: 'https://abracadabra.money/',
    description:
      'SPELL is the incentivation token of Abracadabra.money. sSPELL is the staked version of it',
    logoURI: 'https://app.spiritswap.finance/images/tokens/SSPELL.png',
  },
  wMEMO: {
    name: 'Wrapped MEMO',
    symbol: 'wMEMO',
    address: '0xDDc0385169797937066bBd8EF409b5B3c0dFEB52',
    chainId: 250,
    decimals: 18,
    website: 'https://abracadabra.money/',
    description:
      'wMEMO is a wrapped version of MEMO. MEMO (Memories) is the reciept of staked TIME.',
    logoURI: 'https://app.spiritswap.finance/images/tokens/WMEMO.png',
  },
  DOLA: {
    name: 'DOLA USD',
    symbol: 'DOLA',
    address: '0x3129662808bEC728a27Ab6a6b9AFd3cBacA8A43c',
    chainId: 250,
    decimals: 18,
    website: 'https://www.inverse.finance/',
    description:
      'Inverse.finance is a suite of permissionless decentralized finance tools governed by Inverse DAO, a decentralized autonomous organization running on the Ethereum blockchain.',
    logoURI: 'https://assets.spookyswap.finance/tokens/DOLA.png',
  },
  INV: {
    name: 'Inverse Finance',
    symbol: 'INV',
    address: '0xb84527D59b6Ecb96F433029ECc890D4492C5dCe1',
    chainId: 250,
    decimals: 18,
    website: 'https://www.inverse.finance/',
    description:
      'Inverse.finance is a suite of permissionless decentralized finance tools governed by Inverse DAO, a decentralized autonomous organization running on the Ethereum blockchain.',
    logoURI: 'https://assets.spookyswap.finance/tokens/INV.png',
  },
} as const;

export const tokens: ConstRecord<typeof _tokens, Token> = _tokens;
