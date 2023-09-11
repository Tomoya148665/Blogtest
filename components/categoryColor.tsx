export function categoryColor(str: string): {
  bgColor: string;
  textColor: string;
} {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const colors = [
    { bg: "#F7ECEC", text: "#B25F5F" },
    { bg: "#E7F4F4", text: "#5FA0A0" },
    { bg: "#F4ECEC", text: "#A06565" },
    { bg: "#F4ECEC", text: "#A06565" },

    // ここに更に色のペアを追加できます
  ];

  const index = Math.abs(hash) % colors.length;

  return colors[index];
}
