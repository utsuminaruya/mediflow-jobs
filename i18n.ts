export type Lang = "ja" | "vi";

export const dict = {
  ja: {
    site_title: "外国人向け 介護・医療系 求人",
    subtitle: "日本で働くあなたへ。最速で最新の求人情報をお届け",
    cta_contact: "相談する",
    search_placeholder: "キーワード（例：介護、N3、寮あり）",
    filters: "条件",
    major_areas: "主要エリア",
    regions: "地域",
    clear: "クリア",
    jobs: "求人",
    city: "勤務地",
    salary: "給与",
    visa: "ビザ",
    language_level: "日本語",
    tags: "特徴",
    no_results: "該当する求人が見つかりませんでした。条件を調整してください。",
    footer_note: "運営：メディフロー株式会社 | 電話: 042-716-0218 | メール: mediflow1002@gmail.com | 住所: 神奈川県緑区橋本",
    jp: "日本語",
    vi: "Tiếng Việt",
  },
  vi: {
    site_title: "Việc làm y tế/điều dưỡng tại Nhật",
    subtitle: "Dành cho bạn muốn làm việc tại Nhật. Cập nhật tin tuyển dụng mới nhanh nhất.",
    cta_contact: "Tư vấn ngay",
    search_placeholder: "Từ khóa (ví dụ: điều dưỡng, N3, có ký túc xá)",
    filters: "Bộ lọc",
    major_areas: "Khu vực chính",
    regions: "Vùng",
    clear: "Xóa",
    jobs: "Tin tuyển dụng",
    city: "Nơi làm việc",
    salary: "Lương",
    visa: "Visa",
    language_level: "Tiếng Nhật",
    tags: "Đặc điểm",
    no_results: "Không tìm thấy tin phù hợp. Vui lòng điều chỉnh điều kiện.",
    footer_note: "Vận hành: Mediflow Co., Ltd. | Điện thoại: 042-716-0218 | Email: mediflow1002@gmail.com | Địa chỉ: Midori-ku, Hashimoto, Kanagawa",
    jp: "Tiếng Nhật",
    vi: "Tiếng Việt",
  }
} as const;

export const uiText = (lang: Lang) => dict[lang];
