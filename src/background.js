const defaultNameList = [
  '月ノ美兎',
  '勇気ちひろ',
  'エルフのえる【にじさんじ公式】',
  '樋口楓【にじさんじ所属】',
  'Shizuka Rin Official',
  '渋谷ハジメのはじめ支部',
  'アキくんちゃんネル',
  '《にじさんじ所属の女神》モイラ',
  '剣持刀也【にじさんじ所属】',
  '伏見ガク【にじさんじ所属】',
  'Gilzaren III Season1',
  '文野環【 にじさんじ所属の野良猫 】 文野環【 にじさんじ所属の野良猫 】',
  '宇志海いちご',
  'Yuhi Riri Official',
  '鈴鹿詩子',
  '♥️♠️物述有栖♦️♣️',
  'Official Mugi Ienaga',
  '森中花咲',
  'Kanae Channel',
  'Akabane Channel',

  'さなちゃんねる',
];
const storageKey = 'nameList';

const getStorageData = key => {
  return new Promise(resolve => {
    chrome.storage.local.get(key, value => {
      resolve(value);
    });
  })
};

const setStorageData = (key, value) => {
  return new Promise(resolve => {
    chrome.storage.local.set({
      [key]: value,
    }, () => {
      resolve();
    });
  });
};

chrome.runtime.onInstalled.addListener(async () => {
  const storageData = await getStorageData(storageKey)

  if (Object.keys(storageData).length === 0) {
    await setStorageData(storageKey, defaultNameList);
  }
});
