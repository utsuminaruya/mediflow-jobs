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
  tags: string[];
};
export const jobs: Job[] = [
  {
    id: "sample-1",
    title_ja: "介護スタッフ（特定技能）",
    title_vi: "Nhân viên điều dưỡng (Tokutei Ginou)",
    description_ja: "有料老人ホームでの介護業務全般。先輩が丁寧にサポート。寮あり。",
    description_vi: "Công việc điều dưỡng tại viện dưỡng lão. Có người hướng dẫn tận tình. Có ký túc xá.",
    prefecture: "Kanagawa",
    region: "Kanto",
    visa: "特定技能",
    language: "N3",
    salary: "月給 230,000〜270,000円",
    tags: ["寮・社宅あり", "N3+", "土日休み"]
  },
  {
    id: "sample-2",
    title_ja: "病院内サポートスタッフ（無資格OK）",
    title_vi: "Hỗ trợ trong bệnh viện (không yêu cầu chứng chỉ)",
    description_ja: "病棟のサポートや患者さんの案内など。日本語N4〜歓迎。",
    description_vi: "Hỗ trợ tại khoa bệnh, hướng dẫn bệnh nhân. Trình độ tiếng Nhật từ N4 trở lên được hoan nghênh.",
    prefecture: "Tokyo",
    region: "Kanto",
    visa: "不問",
    language: "N4",
    salary: "時給 1,300〜1,600円",
    tags: ["駅近", "シフト柔軟"]
  }
];
