import type { MajorAreaId, RegionId } from "./regions";

export type Job = {
  id: string;
  title_ja: string;
  title_vi: string;
  description_ja: string;
  description_vi: string;
  prefecture: MajorAreaId | string;
  region: RegionId;
  visa: "特定技能" | "技術・人文知識・国際業務" | "留学可" | "不問";
  language: "N5" | "N4" | "N3" | "N2" | "N1" | "不問";
  salary: string;
  tags: string[]; // 標準化: 寮・社宅あり / N3+ / 土日休み
};

export const jobs: Job[] = [
  {
    id: "kng-001",
    title_ja: "介護スタッフ（特定技能・有料老人ホーム）",
    title_vi: "Điều dưỡng (Tokutei) tại viện dưỡng lão",
    description_ja: "食事・入浴・排泄のサポート。教育体制あり・夜勤サポート手当。📲 LINEで最速案内 → https://lin.ee/1Q4fYRt",
    description_vi: "Hỗ trợ ăn uống, tắm rửa, vệ sinh. Có đào tạo và phụ cấp ca đêm. 📲 Tư vấn nhanh qua LINE → https://lin.ee/1Q4fYRt",
    prefecture: "Kanagawa",
    region: "Kanto",
    visa: "特定技能",
    language: "N3",
    salary: "月給 230,000〜270,000円",
    tags: ["寮・社宅あり","N3+","土日休み"]
  },
  {
    id: "tky-002",
    title_ja: "病院内サポート（無資格OK・病棟助手）",
    title_vi: "Trợ lý bệnh viện (không yêu cầu chứng chỉ)",
    description_ja: "患者誘導・備品補充・環境整備。シフト柔軟。📲 LINEで最速案内 → https://lin.ee/1Q4fYRt",
    description_vi: "Dẫn bệnh nhân, bổ sung vật tư, dọn dẹp khu bệnh. Ca linh hoạt. 📲 Liên hệ nhanh qua LINE → https://lin.ee/1Q4fYRt",
    prefecture: "Tokyo",
    region: "Kanto",
    visa: "不問",
    language: "N4",
    salary: "時給 1,300〜1,600円",
    tags: ["寮・社宅あり","N3+","土日休み"]
  },
  {
    id: "kng-003",
    title_ja: "介護スタッフ（夜勤なし・グループホーム）",
    title_vi: "Điều dưỡng (không ca đêm) tại group home",
    description_ja: "生活支援中心で夜勤なし。定着率高め。📲 LINEで最速案内 → https://lin.ee/1Q4fYRt",
    description_vi: "Hỗ trợ sinh hoạt, không có ca đêm, ổn định lâu dài. 📲 Liên hệ LINE → https://lin.ee/1Q4fYRt",
    prefecture: "Kanagawa",
    region: "Kanto",
    visa: "特定技能",
    language: "N3",
    salary: "月給 220,000〜260,000円",
    tags: ["寮・社宅あり","N3+","土日休み"]
  },
  {
    id: "tky-004",
    title_ja: "訪問介護（直行直帰・移動手当）",
    title_vi: "Chăm sóc tại nhà (đi thẳng về thẳng, có phụ cấp đi lại)",
    description_ja: "利用者宅での身体・生活援助。直行直帰OK・移動手当支給。📲 LINEで最速案内 → https://lin.ee/1Q4fYRt",
    description_vi: "Hỗ trợ tại nhà: sinh hoạt và chăm sóc cơ bản. Đi thẳng về thẳng, có phụ cấp di chuyển. 📲 LINE → https://lin.ee/1Q4fYRt",
    prefecture: "Tokyo",
    region: "Kanto",
    visa: "不問",
    language: "N3",
    salary: "時給 1,500〜1,900円",
    tags: ["寮・社宅あり","N3+","土日休み"]
  },
  {
    id: "kng-005",
    title_ja: "デイサービス介護職（送迎あり）",
    title_vi: "Điều dưỡng Day-service (có đưa đón)",
    description_ja: "入浴・機能訓練補助・レクリエーション。日勤メイン。📲 LINEで最速案内 → https://lin.ee/1Q4fYRt",
    description_vi: "Hỗ trợ tắm, tập phục hồi, hoạt động giải trí. Chủ yếu làm ban ngày. 📲 Liên hệ LINE → https://lin.ee/1Q4fYRt",
    prefecture: "Kanagawa",
    region: "Kanto",
    visa: "特定技能",
    language: "N3",
    salary: "月給 220,000〜255,000円",
    tags: ["寮・社宅あり","N3+","土日休み"]
  },
  {
    id: "tky-006",
    title_ja: "クリニック受付・医療事務（外来）",
    title_vi: "Lễ tân/nhân viên hành chính phòng khám (ngoại trú)",
    description_ja: "受付・会計・レセプト補助。PC入力が得意な方歓迎。📲 LINEで最速案内 → https://lin.ee/1Q4fYRt",
    description_vi: "Tiếp tân, thanh toán, hỗ trợ hồ sơ. Ưu tiên biết nhập liệu máy tính. 📲 LINE → https://lin.ee/1Q4fYRt",
    prefecture: "Tokyo",
    region: "Kanto",
    visa: "技術・人文知識・国際業務",
    language: "N2",
    salary: "月給 230,000〜260,000円",
    tags: ["寮・社宅あり","N3+","土日休み"]
  },
  {
    id: "kng-007",
    title_ja: "調理補助（病院内キッチン）",
    title_vi: "Phụ bếp tại bệnh viện",
    description_ja: "盛付・配膳・食器洗浄。早朝・日勤シフト有り。📲 LINEで最速案内 → https://lin.ee/1Q4fYRt",
    description_vi: "Sơ chế, bày món, rửa chén. Có ca sáng và ca ngày. 📲 LINE → https://lin.ee/1Q4fYRt",
    prefecture: "Kanagawa",
    region: "Kanto",
    visa: "不問",
    language: "N4",
    salary: "時給 1,200〜1,400円",
    tags: ["寮・社宅あり","N3+","土日休み"]
  },
  {
    id: "tky-008",
    title_ja: "看護助手（大学病院・大規模施設）",
    title_vi: "Hỗ trợ điều dưỡng (bệnh viện đại học, cơ sở lớn)",
    description_ja: "検査搬送・器具洗浄・環境整備。研修充実。📲 LINEで最速案内 → https://lin.ee/1Q4fYRt",
    description_vi: "Hỗ trợ vận chuyển, vệ sinh dụng cụ, dọn dẹp. Đào tạo đầy đủ. 📲 LINE → https://lin.ee/1Q4fYRt",
    prefecture: "Tokyo",
    region: "Kanto",
    visa: "不問",
    language: "N3",
    salary: "月給 220,000〜250,000円",
    tags: ["寮・社宅あり","N3+","土日休み"]
  },
  {
    id: "osk-009",
    title_ja: "介護職（特定技能・夜勤あり/大阪）",
    title_vi: "Điều dưỡng (Tokutei, có ca đêm) tại Osaka",
    description_ja: "特養での介護全般。夜勤手当・資格手当あり。📲 LINEで最速案内 → https://lin.ee/1Q4fYRt",
    description_vi: "Chăm sóc tại viện dưỡng lão đặc biệt. Có phụ cấp ca đêm/chứng chỉ. 📲 LINE → https://lin.ee/1Q4fYRt",
    prefecture: "Osaka",
    region: "Kinki",
    visa: "特定技能",
    language: "N3",
    salary: "月給 235,000〜285,000円",
    tags: ["寮・社宅あり","N3+","土日休み"]
  },
  {
    id: "aic-010",
    title_ja: "グループホーム介護（経験者歓迎/愛知）",
    title_vi: "Điều dưỡng group home (ưu tiên kinh nghiệm) tại Aichi",
    description_ja: "少人数ユニットで手厚いケア。資格取得サポート。📲 LINEで最速案内 → https://lin.ee/1Q4fYRt",
    description_vi: "Mô hình ít người, chăm sóc kỹ. Hỗ trợ lấy chứng chỉ. 📲 LINE → https://lin.ee/1Q4fYRt",
    prefecture: "Aichi",
    region: "Chubu",
    visa: "特定技能",
    language: "N3",
    salary: "月給 225,000〜265,000円",
    tags: ["寮・社宅あり","N3+","土日休み"]
  }
];
