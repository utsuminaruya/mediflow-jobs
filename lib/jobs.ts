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
    description_ja:
      "有料老人ホームでの介護業務全般を担当します。入浴・食事・排泄の介助に加え、見守りやリハビリ補助など生活全体を支える役割です。入職後は先輩がマンツーマンで指導し、評価表に沿って段階的にスキルを習得できます。外国籍の職員が多数在籍しており、就業規則やマニュアルは外国人向けのやさしい日本語で整備。夜勤時は複数名体制で、初めての方でも不安なくシフトに入れます。",
    description_vi:
      "Công việc điều dưỡng tại viện dưỡng lão bao gồm hỗ trợ ăn uống, tắm rửa, vệ sinh và theo dõi tình trạng sức khỏe hằng ngày. Sau khi vào làm, bạn được hướng dẫn kèm cặp theo lộ trình rõ ràng để nâng cao kỹ năng một cách chắc chắn. Nơi làm việc có nhiều nhân viên nước ngoài, quy định và tài liệu hướng dẫn được viết bằng tiếng Nhật đơn giản, dễ hiểu. Khi làm ca đêm luôn có nhiều nhân viên cùng trực, tạo cảm giác an tâm cho người mới.",
    prefecture: "Kanagawa",
    region: "Kanto",
    visa: "特定技能",
    language: "N3",
    salary: "月給 230,000〜270,000円",
    tags: ["寮・社宅あり", "N3+", "土日休み"]
  },
  {
    id: "tky-002",
    title_ja: "病院内サポート（無資格OK・病棟助手）",
    title_vi: "Trợ lý bệnh viện (không yêu cầu chứng chỉ)",
    description_ja:
      "病棟での患者搬送、シーツ交換、備品補充、環境整備などを行います。医療行為はありませんが、看護師・医師と連携しながらチームで業務を進めます。未経験入職者向けの院内研修があり、専門用語や動線、衛生管理を基礎から学べます。シフトは週ごとに調整可能で、学校や家庭との両立もしやすい職場です。",
    description_vi:
      "Bạn phụ trách dẫn bệnh nhân, thay ga giường, bổ sung vật tư và giữ gìn sạch sẽ trong khoa. Công việc không yêu cầu thao tác y khoa nên phù hợp với người mới bắt đầu. Bệnh viện có chương trình đào tạo nội bộ giúp bạn nắm các quy tắc vệ sinh, thuật ngữ và quy trình làm việc. Lịch làm việc linh hoạt theo tuần, dễ sắp xếp với việc học hoặc gia đình.",
    prefecture: "Tokyo",
    region: "Kanto",
    visa: "不問",
    language: "N4",
    salary: "時給 1,300〜1,600円",
    tags: ["寮・社宅あり", "N3+", "土日休み"]
  },
  {
    id: "kng-003",
    title_ja: "介護スタッフ（夜勤なし・グループホーム）",
    title_vi: "Điều dưỡng (không ca đêm) tại group home",
    description_ja:
      "少人数のユニット型グループホームで、日中の生活支援を中心に行います。料理の配膳、掃除、買い物同行、レクリエーション運営など、家庭的な雰囲気での支援が特徴です。夜勤はなく、生活リズムを崩さずに働けます。外国籍スタッフへのフォローも手厚く、定着率の高い職場です。",
    description_vi:
      "Làm việc tại group home quy mô nhỏ, chủ yếu hỗ trợ sinh hoạt ban ngày như dọn dẹp, nấu ăn đơn giản, đi mua sắm cùng người cao tuổi và tổ chức hoạt động giải trí. Không có ca đêm nên dễ duy trì nhịp sinh hoạt ổn định. Đơn vị có chế độ hỗ trợ tốt cho nhân viên nước ngoài, môi trường thân thiện và gắn bó lâu dài.",
    prefecture: "Kanagawa",
    region: "Kanto",
    visa: "特定技能",
    language: "N3",
    salary: "月給 220,000〜260,000円",
    tags: ["寮・社宅あり", "N3+", "土日休み"]
  },
  {
    id: "tky-004",
    title_ja: "訪問介護（直行直帰・移動手当あり）",
    title_vi: "Chăm sóc tại nhà (đi thẳng về thẳng, có phụ cấp đi lại)",
    description_ja:
      "利用者のご自宅を訪問し、入浴・食事・排泄介助や掃除、買い物代行などを行います。直行直帰が可能で、移動時間や移動距離に応じた手当が支給されます。固定の利用者を担当するため、信頼関係を築きながら長期で寄り添えます。独り立ちまでは先輩が同行し、記録の書き方や接遇も丁寧に学べます。",
    description_vi:
      "Bạn đến nhà người cao tuổi để hỗ trợ tắm rửa, ăn uống, vệ sinh, dọn dẹp và mua sắm khi cần. Có thể đi thẳng và về thẳng, đồng thời được trợ cấp cho thời gian và quãng đường di chuyển. Thường phụ trách cố định một số khách hàng nên dễ xây dựng mối quan hệ tin cậy lâu dài. Trước khi làm độc lập sẽ có nhân viên đi cùng để hướng dẫn cách ghi chép và giao tiếp.",
    prefecture: "Tokyo",
    region: "Kanto",
    visa: "不問",
    language: "N3",
    salary: "時給 1,500〜1,900円",
    tags: ["寮・社宅あり", "N3+", "土日休み"]
  },
  {
    id: "kng-005",
    title_ja: "デイサービス介護職（日勤・送迎あり）",
    title_vi: "Điều dưỡng Day-service (có đưa đón)",
    description_ja:
      "日中のみの通所介護施設で、入浴介助、機能訓練の補助、レクリエーションの企画運営を行います。送迎スタッフと連携しながら、安全な入退所をサポート。残業は少なく、家族との時間を確保しやすい就業環境です。季節イベントが多く、利用者の笑顔を直接感じられるのが魅力です。",
    description_vi:
      "Làm tại cơ sở chăm sóc ban ngày: hỗ trợ tắm, trợ giúp tập phục hồi chức năng và tổ chức hoạt động giải trí. Bạn phối hợp với nhân viên lái xe để đảm bảo đưa đón an toàn. Hầu như không tăng ca nên dễ cân bằng với thời gian cho gia đình. Nhiều sự kiện theo mùa tạo bầu không khí vui vẻ và thân thiện.",
    prefecture: "Kanagawa",
    region: "Kanto",
    visa: "特定技能",
    language: "N3",
    salary: "月給 220,000〜255,000円",
    tags: ["寮・社宅あり", "N3+", "土日休み"]
  },
  {
    id: "tky-006",
    title_ja: "クリニック受付・医療事務（外来）",
    title_vi: "Lễ tân/nhân viên hành chính phòng khám (ngoại trú)",
    description_ja:
      "外来クリニックでの受付、会計、レセプト補助、カルテ管理を担当します。PC入力に慣れていれば未経験でも活躍可能で、診療報酬や医療用語は入職後に学べます。患者対応では丁寧な言葉遣いと正確な案内が求められます。医師・看護師・検査技師と連携し、チーム医療の一員として働けます。",
    description_vi:
      "Công việc tại phòng khám ngoại trú gồm đón tiếp bệnh nhân, thanh toán, hỗ trợ hồ sơ bảo hiểm y tế và quản lý bệnh án. Nếu quen nhập dữ liệu máy tính, bạn có thể bắt đầu dù chưa có kinh nghiệm; các kiến thức chuyên môn sẽ được đào tạo sau khi vào làm. Cần giao tiếp lịch sự và hướng dẫn chính xác cho bệnh nhân. Làm việc theo nhóm cùng bác sĩ, điều dưỡng và kỹ thuật viên.",
    prefecture: "Tokyo",
    region: "Kanto",
    visa: "技術・人文知識・国際業務",
    language: "N2",
    salary: "月給 230,000〜260,000円",
    tags: ["寮・社宅あり", "N3+", "土日休み"]
  },
  {
    id: "kng-007",
    title_ja: "調理補助（病院内キッチン）",
    title_vi: "Phụ bếp tại bệnh viện",
    description_ja:
      "病院の厨房で盛付、配膳、食器洗浄、簡単な仕込みを行います。衛生管理の基準が明確で、手順書に沿って落ち着いて作業できます。体力仕事の面もありますが、担当業務はチームで分担され、無理のないシフト設計です。早朝・日勤の選択ができ、生活スタイルに合わせて働けます。",
    description_vi:
      "Làm trong bếp bệnh viện với các công việc bày món, phục vụ khay thức ăn, rửa chén và sơ chế đơn giản. Quy định vệ sinh rõ ràng, có tài liệu hướng dẫn cụ thể nên thao tác dễ nắm. Công việc cần sức nhưng được chia theo nhóm để tránh quá tải. Có thể chọn ca sáng sớm hoặc ca ngày tùy theo thói quen sinh hoạt.",
    prefecture: "Kanagawa",
    region: "Kanto",
    visa: "不問",
    language: "N4",
    salary: "時給 1,200〜1,400円",
    tags: ["寮・社宅あり", "N3+", "土日休み"]
  },
  {
    id: "tky-008",
    title_ja: "看護助手（大学病院・大規模施設）",
    title_vi: "Hỗ trợ điều dưỡng (bệnh viện đại học, cơ sở lớn)",
    description_ja:
      "大学病院で、検査室への搬送、器具洗浄、ベッド周りの環境整備などを行います。配属前に基礎研修があり、患者対応や感染対策を丁寧に学べます。配属後もOJTで先輩が同席し、業務の振り返りを行うため、未経験でもスムーズに独り立ちできます。将来的に看護師資格や医療関連資格を目指す方にも最適です。",
    description_vi:
      "Bạn hỗ trợ vận chuyển bệnh nhân đến phòng xét nghiệm, vệ sinh dụng cụ và sắp xếp khu vực xung quanh giường bệnh. Trước khi nhận việc có khóa đào tạo cơ bản về giao tiếp với bệnh nhân và phòng chống lây nhiễm. Sau khi phân công chính thức vẫn có người kèm cặp và đánh giá định kỳ, giúp người mới tiến bộ nhan
