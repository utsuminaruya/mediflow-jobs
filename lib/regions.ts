export const majorAreas = [
  { id: "Tokyo", label: "東京" },
  { id: "Kanagawa", label: "神奈川" },
  { id: "Osaka", label: "大阪" },
  { id: "Aichi", label: "愛知" },
  { id: "Saitama", label: "埼玉" },
  { id: "Chiba", label: "千葉" },
  { id: "Fukuoka", label: "福岡" },
] as const;
export type MajorAreaId = typeof majorAreas[number]["id"];
export const regions = [
  { id: "Hokkaido", ja: "北海道", vi: "Hokkaidō" },
  { id: "Tohoku", ja: "東北", vi: "Tōhoku" },
  { id: "Kanto", ja: "関東", vi: "Kantō" },
  { id: "Chubu", ja: "中部", vi: "Chūbu" },
  { id: "Kinki", ja: "近畿", vi: "Kinki" },
  { id: "Chugoku", ja: "中国", vi: "Chūgoku" },
  { id: "Shikoku", ja: "四国", vi: "Shikoku" },
  { id: "KyushuOkinawa", ja: "九州・沖縄", vi: "Kyūshū & Okinawa" },
] as const;
export type RegionId = typeof regions[number]["id"];
