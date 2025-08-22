// 觉察之墙 - 核心内容数据

// 座右铭和原则的字符串数组
export const mottos: string[] = [
  "微习惯完成就是成功，不要对未完成更多而失望",
  "进度 = 步伐 X 速度",
  "顺序——先做重要的事情",
  "每日 TODO 做完了吗？",
  "我每天完成一件让自己更接近目标的事情",
  "先行动才有可能",
  "优先完成星标任务",
  "睡眠 NO1",
  "我是长期主义者、关注长期价值",
  "先努力再享乐",
  "我关爱自己的身体",
  "拥抱现实、应对现实",
  "直面痛苦与困难"

];

// 获取随机座右铭
export const getRandomMotto = (): string => {
  const randomIndex = Math.floor(Math.random() * mottos.length);
  return mottos[randomIndex];
};

// 获取指定索引的座右铭
export const getMottoByIndex = (index: number): string => {
  if (index >= 0 && index < mottos.length) {
    return mottos[index];
  }
  return getRandomMotto();
};

// 获取所有座右铭
export const getAllMottos = (): string[] => {
  return [...mottos];
};