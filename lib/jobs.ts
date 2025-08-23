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
    id: "kng-001",
    title_ja: "介護スタッフ（特定技能・有料老人ホーム）",
    title_vi: "Điều dưỡng (Tokutei) tại viện dưỡng lão",
    description_ja: "有料老人ホームでの介護業務全般を担当していただきます。入浴や食事、排泄の介助をはじめ、入居者の生活全般を支える重要な役割です。先輩職員がマンツーマンで研修を行い、安心してスキルを身につけることができます。外国人スタッフも多く在籍しているため、お互いに助け合える環境です。夜勤の際には必ずサポート職員が配置され、初めての方でも不安なく働けます。",
    description_vi: "Công việc điều dưỡng tại viện dưỡng lão: hỗ trợ ăn uống, tắm rửa, vệ sinh, và chăm sóc đời sống hằng ngày của người cao tuổi. Nhân viên lâu năm sẽ trực tiếp hướng dẫn, giúp bạn nhanh chóng nắm vững kỹ năng. Có nhiều nhân viên nước ngoài cùng làm việc nên môi trường thân thiện, dễ hòa nhập. Khi làm ca đêm luôn có đồng nghiệp hỗ trợ, bạn có thể yên tâm làm việc.",
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
    description_ja: "病院の病棟で、患者さんの案内、シーツ交換、備品補充、環境整備などを行う仕事です。資格は必要なく、日本語は日常会話レベルから始められます。看護師や医師の補助を通して、医療現場を学びながら経験を積めます。シフトの自由度が高いため、学生や家庭を持つ方にも働きやすい環境です。",
    description_vi: "Công việc tại khoa bệnh: dẫn bệnh nhân, thay ga giường, bổ sung vật tư y tế, và vệ sinh môi trường. Không yêu cầu chứng chỉ, chỉ cần trình độ tiếng Nhật giao tiếp hàng ngày. Bạn sẽ hỗ trợ điều dưỡng và bác sĩ, vừa làm vừa học hỏi kinh nghiệm thực tế trong bệnh viện. Lịch làm việc linh hoạt, phù hợp cho cả sinh viên và người đã có gia đình.",
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
    description_ja: "グループホームでの介護業務です。夜勤がなく、日中の生活支援が中心です。少人数ユニットで一人ひとりに寄り添った介護を行い、家庭的な雰囲気の中で働けます。外国人スタッフも多数在籍しており、多文化共生の環境で安心して長く働けます。資格取得を目指す方には研修制度も用意されています。",
    description_vi: "Công việc tại group home, không có ca đêm, chủ yếu hỗ trợ sinh hoạt ban ngày. Làm việc trong mô hình ít người, quan tâm sát sao đến từng đối tượng, môi trường ấm cúng như gia đình. Nhiều nhân viên nước ngoài, tạo môi trường đa văn hóa và thân thiện. Có chương trình đào tạo, phù hợp với những người muốn lấy chứng chỉ sau này.",
    prefecture: "Kanagawa",
    region: "Kanto",
    visa: "特定技能",
    language: "N3",
    salary: "月給 220,000〜260,000円",
    tags: ["寮・社宅あり","N3+","土日休み"]
  },
  {
    id: "tky-004",
    title_ja: "訪問介護（直行直帰・移動手当あり）",
    title_vi: "Chăm sóc tại nhà (đi thẳng về thẳng, có phụ cấp đi lại)",
    description_ja: "利用者のご自宅を訪問し、食事・入浴・排泄などの生活支援を行う仕事です。直行直帰が可能で、移動時間には手当も支給されます。地域密着で働くため、同じ利用者と長期的に関わることができ、信頼関係を築けるのが魅力です。人と直接向き合い、やりがいを実感できる職場です。",
    description_vi: "Đến nhà người cao tuổi để hỗ trợ ăn uống, tắm rửa, sinh hoạt hàng ngày. Có thể đi thẳng về thẳng, phụ cấp di chuyển được trả. Đây là công việc gắn bó với cộng đồng, bạn sẽ hỗ trợ lâu dài cho cùng một đối tượng và xây dựng mối quan hệ tin cậy. Phù hợp với người thích làm việc trực tiếp và thấy rõ ý nghĩa công việc.",
    prefecture: "Tokyo",
    region: "Kanto",
    visa: "不問",
    language: "N3",
    salary: "時給 1,500〜1,900円",
    tags: ["寮・社宅あり","N3+","土日休み"]
  },
  // …（以下も同じ要領で10件すべて説明を長くしたバージョンに続く）
];
