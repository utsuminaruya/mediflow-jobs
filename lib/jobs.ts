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
      "有料老人ホームでの介護業務全般を担当します。入浴・食事・排泄の介助に加え、見守りやリハビリ補助、季節イベントの準備など生活全体を支える役割です。入職後は先輩がマンツーマンで研修し、評価表に沿って段階的にスキルを習得できます。外国籍職員も多く、就業規則やマニュアルはやさしい日本語で整備。夜勤は複数名体制で、初めての方でも不安なくシフトに入れます。",
    description_vi:
      "Công việc bao gồm hỗ trợ ăn uống, tắm rửa, vệ sinh, theo dõi tình trạng hằng ngày và chuẩn bị hoạt động theo mùa cho người cao tuổi. Sau khi vào làm, bạn được hướng dẫn theo lộ trình rõ ràng để nâng cao kỹ năng. Nơi làm việc có nhiều nhân viên nước ngoài, tài liệu hướng dẫn bằng tiếng Nhật dễ hiểu. Ca đêm luôn có nhiều người trực chung nên an tâm cho người mới.",
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
      "病棟での患者搬送、シーツ交換、備品補充、環境整備を担当。医療行為はありませんが、看護師・医師と連携しチームで動きます。未経験者向けの院内研修があり、衛生管理・専門用語・動線を基礎から習得可能。週ごとのシフト調整で、学業や家庭との両立がしやすい環境です。",
    description_vi:
      "Bạn dẫn bệnh nhân di chuyển, thay ga giường, bổ sung vật tư và giữ vệ sinh khu vực. Không yêu cầu thao tác y khoa, làm việc theo nhóm cùng điều dưỡng và bác sĩ. Bệnh viện có đào tạo nội bộ cho người mới về vệ sinh, thuật ngữ và quy trình. Lịch làm việc linh hoạt theo tuần, dễ sắp xếp với học tập hoặc gia đình.",
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
      "少人数ユニット型グループホームで、日中の生活支援が中心。配膳・清掃・買い物同行・レクリエーション運営など、家庭的な雰囲気で一人ひとりに寄り添うケアを行います。夜勤がないため生活リズムを崩さずに働け、外国籍スタッフへのフォローも手厚く定着率が高い職場です。",
    description_vi:
      "Làm việc trong mô hình nhóm ít người, hỗ trợ sinh hoạt ban ngày như bày món, dọn dẹp, đi mua sắm cùng người cao tuổi và tổ chức hoạt động giải trí. Không có ca đêm nên giữ được nhịp sống ổn định. Đơn vị hỗ trợ tốt cho nhân viên nước ngoài, môi trường thân thiện và gắn bó lâu dài.",
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
      "利用者宅を訪問し、入浴・食事・排泄の介助、掃除や買い物代行などを行います。直行直帰が可能で、移動時間や距離に応じた手当を支給。固定利用者を担当するため信頼関係を築きやすく、独り立ちまでは先輩が同行して記録・接遇を丁寧に指導します。地域に根ざしたやりがいのある仕事です。",
    description_vi:
      "Bạn đến nhà người cao tuổi để hỗ trợ tắm rửa, ăn uống, vệ sinh; dọn dẹp hoặc đi chợ khi cần. Có thể đi thẳng về thẳng, được trợ cấp theo thời gian/khoảng cách di chuyển. Thường phụ trách khách hàng cố định nên dễ xây dựng quan hệ tin cậy lâu dài. Trước khi làm độc lập, sẽ có người hướng dẫn đi cùng, chỉ dẫn cách ghi chép và giao tiếp.",
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
      "通所介護施設で、入浴介助・機能訓練補助・レクリエーション企画運営を担当。送迎スタッフと連携し、安全な入退所を支援します。日勤のみで残業は少なく、家庭との両立がしやすい職場。季節イベントが豊富で、利用者の笑顔を間近に感じながら働けます。",
    description_vi:
      "Làm tại cơ sở chăm sóc ban ngày: hỗ trợ tắm, trợ giúp tập phục hồi chức năng và tổ chức hoạt động giải trí. Phối hợp với nhân viên lái xe để đưa đón an toàn. Chỉ làm ban ngày, hầu như không tăng ca nên dễ cân bằng cuộc sống gia đình. Nhiều sự kiện theo mùa tạo bầu không khí vui vẻ, gần gũi.",
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
      "外来クリニックで受付、会計、レセプト補助、カルテ管理を行います。PC入力に慣れていれば未経験でも活躍可能で、診療報酬や医療用語は入職後に学べます。患者対応では丁寧な言葉遣いと正確な案内が求められ、医師・看護師・検査技師と連携してチーム医療を支えます。",
    description_vi:
      "Bạn phụ trách đón tiếp bệnh nhân, thanh toán, hỗ trợ hồ sơ bảo hiểm y tế và quản lý bệnh án. Nếu quen nhập dữ liệu máy tính, bạn có thể bắt đầu dù chưa có kinh nghiệm; kiến thức chuyên môn sẽ được đào tạo sau khi vào làm. Cần giao tiếp lịch sự và hướng dẫn chính xác. Làm việc nhóm cùng bác sĩ, điều dưỡng và kỹ thuật viên xét nghiệm.",
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
      "病院厨房で盛付、配膳、食器洗浄、簡単な仕込みを担当。衛生管理の基準が明確で、手順書に沿って落ち着いて作業できます。体力仕事の面もありますが、担当はチームで分担され無理のないシフト設計です。早朝・日勤の選択ができ、生活スタイルに合わせて勤務可能。",
    description_vi:
      "Làm trong bếp bệnh viện: bày món, phục vụ khay thức ăn, rửa chén và sơ chế đơn giản. Quy trình vệ sinh rõ ràng, có hướng dẫn chi tiết nên thao tác dễ nắm. Công việc cần sức nhưng được chia theo nhóm để tránh quá tải. Có thể chọn ca sáng sớm hoặc ca ngày phù hợp với thói quen sinh hoạt.",
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
      "大学病院で、検査室への搬送、器具洗浄、ベッド周りの整備などを行います。配属前に基礎研修があり、患者対応や感染対策を丁寧に学べます。配属後もOJTで先輩が同席し、業務の振り返りを通じてスムーズに独り立ちできます。将来、看護師や医療関連資格を目指す方にも最適です。",
    description_vi:
      "Bạn hỗ trợ vận chuyển bệnh nhân đến phòng xét nghiệm, vệ sinh dụng cụ và sắp xếp khu vực quanh giường. Trước khi làm có đào tạo cơ bản về giao tiếp và phòng chống lây nhiễm. Sau khi phân công chính thức vẫn có người kèm cặp và đánh giá, giúp tiến bộ nhanh. Phù hợp với người muốn phát triển lâu dài trong lĩnh vực y tế.",
    prefecture: "Tokyo",
    region: "Kanto",
    visa: "不問",
    language: "N3",
    salary: "月給 220,000〜250,000円",
    tags: ["寮・社宅あり", "N3+", "土日休み"]
  },
  {
    id: "osk-009",
    title_ja: "介護職（特定技能・夜勤あり/大阪）",
    title_vi: "Điều dưỡng (Tokutei, có ca đêm) tại Osaka",
    description_ja:
      "特別養護老人ホームでの介護全般。夜勤手当や資格手当が充実しており、収入面での安定が見込めます。定期的なケース会議でケア方針を共有し、チームで問題解決を進める文化があります。外国籍職員も多く、互いにサポートし合う風土が根づいています。",
    description_vi:
      "Công việc chăm sóc toàn diện tại viện dưỡng lão đặc biệt. Có phụ cấp ca đêm và chứng chỉ giúp mức lương ổn định. Đơn vị họp chuyên môn định kỳ để thống nhất cách chăm sóc và giải quyết vấn đề theo nhóm. Nhiều nhân viên nước ngoài, tinh thần hỗ trợ lẫn nhau rất tốt.",
    prefecture: "Osaka",
    region: "Kinki",
    visa: "特定技能",
    language: "N3",
    salary: "月給 235,000〜285,000円",
    tags: ["寮・社宅あり", "N3+", "土日休み"]
  },
  {
    id: "aic-010",
    title_ja: "グループホーム介護（経験者歓迎/愛知）",
    title_vi: "Điều dưỡng group home (ưu tiên kinh nghiệm) tại Aichi",
    description_ja:
      "少人数ユニットで、個別ケアを重視した介護を行います。経験者は即戦力として歓迎し、ブランクのある方も段階的な研修で現場復帰を支援。資格取得支援制度があり、介護福祉士などのキャリアアップも目指せます。地域に根ざしたアットホームな施設で、長期的にスキルを磨けます。",
    description_vi:
      "Môi trường làm việc theo nhóm nhỏ, tập trung vào chăm sóc cá nhân hóa. Ưu tiên ứng viên có kinh nghiệm; người từng nghỉ việc sẽ được hỗ trợ để quay lại nghề thông qua lộ trình đào tạo. Có chế độ hỗ trợ lấy bằng cấp như Kaigo Fukushishi, phù hợp để phát triển sự nghiệp lâu dài. Không khí ấm áp, gắn bó với cộng đồng.",
    prefecture: "Aichi",
    region: "Chubu",
    visa: "特定技能",
    language: "N3",
    salary: "月給 225,000〜265,000円",
    tags: ["寮・社宅あり", "N3+", "土日休み"]
  }
];
