export type ProjectFeature = {
	label: string;
	detail: string;
};

export type Project = {
	id: string;
	name: string;
	period: string;
	description: string;
	features: ProjectFeature[];
	stack: string[];
	url?: string;
	githubUrl?: string;
	unavailableNote?: string;
};

export const profile = {
	name: "林楷宜",
	englishName: "Ronald",
	role: "前端工程師",
	location: "台南市",
	coordLabel: "前端工程師",
	heroTitle: [
		"用 React 與 Next.js，把複雜需求做成",
		{ text: "使用者一眼能懂", highlight: true },
		"的介面。",
	],
	heroSub:
		"具備約三年前端開發經驗，專注 React、Next.js、TypeScript，並具備 Node.js、Firebase 等後端基礎實務能力，擅長將大量資料與地圖圖徵轉化為流暢的操作體驗。",
	email: "saw634703@gmail.com",
	phone: "0920-348-078",
	github: "https://github.com/yee882408",
} as const;

export const stats = [
	{ value: "3年", label: "前端工作經歷" },
	{ value: "80%", label: "SPARQL 查詢優化" },
	{ value: "805", label: "TOEIC" },
] as const;

export const about = [
	"比起單純的介面實作，我更喜歡處理「資料量大、關係複雜」的前端問題——像是讓千筆級地圖圖徵在瀏覽器裡維持流暢操作，或是把 SPARQL 查出來的巢狀資料轉成使用者看得懂的畫面。這類經驗讓我在一般 CRUD 之外，也具備處理效能瓶頸與資料整合的實戰能力。",
	"具備約三年的前端工程師實務開發經驗，主要使用 React、Next.js 與 TypeScript 建構網站與系統。大學就讀財金相關科系，因對網頁開發產生濃厚興趣，透過自學投入前端領域，並在實務工作中持續累積技術能力與專案經驗。",
	"在先前的工作經驗中，參與多個平台的開發，與其他前端工程師分工負責不同模組，共同完成專案開發。同時也經常參與需求討論、技術方案評估到部署上線的完整流程，負責前端功能設計與實作、API 串接、資料呈現及系統維護，並依需求完成不同類型的資料整合與功能開發。",
	"除了功能開發，也重視程式品質與開發流程。曾導入 Playwright 建立 E2E 自動化測試，協助降低回歸測試成本；同時參與網站無障礙（Accessibility）改善，依循相關規範調整介面與互動設計，提升產品的可用性與品質。",
] as const;

export const experience = {
	title: "前端工程師",
	org: "道易科技股份有限公司",
	orgDetail: "台南市東區",
	period: "2023.07 – 2026.07",
	duration: "3年",
	highlights: [
		"使用 React、Next.js、TypeScript，並依專案需求完成對應的 API 與資料串接，確保前端功能可獨立交付。",
		"使用 Leaflet 建置地圖功能，含 Marker、Cluster、Overlay、多時期 Tile Layer 切換；面對千筆級圖徵，依可視範圍動態篩選並限制顯示密度、搭配 Cluster 合併鄰近點位，縮放地圖時才逐步顯示更多細節，解決大量圖徵同時顯示的效能瓶頸。",
		"撰寫 SPARQL Query 串接 Fuseki，重新設計查詢結構並調整索引使用方式，將搜尋功能等待時間縮短約 80%；並開發 Node.js API 串接 Firestore。",
		"參與開發並維護 5+ 個平台的前台功能與對應後台管理系統，包含資料 CRUD、權限管理、Authentication。",
		"參與需求討論，與 PM、設計師及客戶確認功能可行性與工時評估，並提出技術與體驗優化方案。",
		"撰寫 Playwright E2E 測試，涵蓋約 10-20 個核心操作流程，協助降低回歸測試成本；並推動網站無障礙化改善，通過政府無障礙檢測工具驗證。",
	],
	tags: ["React", "Next.js", "TypeScript", "Leaflet", "SPARQL", "Node.js", "Firebase"],
} as const;

export const projects: Project[] = [
	{
		id: "moment-log",
		name: "Moment Log",
		period: "2026.07 — 進行中",
		description:
			"Moment Log 是一款演唱會回憶記錄平台，使用者可以記錄每一場演唱會的心得、票根資訊與評分，瀏覽其他使用者公開分享的觀演心得，並透過互動功能與其他樂迷交流。專案獨立完成前後端開發，涵蓋資料庫設計、身分驗證、社群互動功能與後台管理系統。",
		features: [
			{
				label: "演唱會紀錄管理",
				detail:
					"新增/編輯個人觀演紀錄，包含票價（支援多幣別）、座位資訊、評分與心得，心得採用 Tiptap 富文本編輯器，支援圖片插入與排版",
			},
			{
				label: "心得瀏覽與全文搜尋",
				detail: "依標題、藝人、場館、內文關鍵字進行加權全文搜尋並依相關性排序，並可依標籤篩選",
			},
			{
				label: "社群互動",
				detail: "按讚、留言、追蹤其他使用者、收藏喜歡的心得與清單，並有即時通知提醒新的互動",
			},
			{
				label: "追星地圖",
				detail: "整合 Leaflet 地圖，記錄與標註喜愛的地點，可建立個人專屬地圖清單並分享",
			},
			{
				label: "統計儀表板",
				detail:
					"透過 Recharts 圖表呈現個人觀演趨勢，包含月度場次、標籤分佈、年度比較、消費統計等多維度回顧",
			},
			{
				label: "後台管理系統",
				detail:
					"管理員可維護演唱會範本資料、管理使用者權限與停權，並具備登入失敗鎖定機制防止暴力破解",
			},
		],
		stack: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS 4",
			"Zod",
			"Docker",
			"Playwright",
			"Recharts",
			"Supabase",
			"Tiptap",
			"Leaflet",
		],
		url: "https://moment-log-chi.vercel.app/",
		githubUrl: "https://github.com/yee882408/moment-log",
	},
	{
		id: "land-ledger",
		name: "土地台帳",
		period: "2023.07 — 2026.07",
		description:
			"土地台帳是提供土地資訊查詢與歷史地圖比對的平台，負責首頁開發、使用者系統架構設計、GIS，並建置 Leaflet 地圖模組，支援大量土地圖徵資料的查詢與視覺化呈現。",
		features: [
			{ label: "土地資料搜尋／篩選", detail: "依地號、區域等條件查詢特定土地資訊" },
			{ label: "地圖圖層切換", detail: "整合臺灣百年歷史地圖圖層，供使用者切換不同時期地圖比對" },
			{ label: "Marker 互動", detail: "點選地圖上的標記點查看土地詳細資料" },
			{
				label: "大量圖徵效能優化",
				detail:
					"面對千筆級圖徵，依可視範圍動態篩選並限制顯示密度、搭配 Cluster 合併鄰近點位，縮放地圖時才逐步顯示更多細節",
			},
			{ label: "會員登入／註冊", detail: "支援不同權限層級的使用者系統" },
		],
		stack: ["Next.js", "Leaflet", "SPARQL", "Firebase"],
		url: "https://land.daoyidh.com/",
	},
	{
		id: "tltc",
		name: "台灣文學外譯房",
		period: "2023.07 — 2026.07",
		description:
			"台灣文學外譯房是台灣文學外譯作品的資料檢索與展示平台，負責平台上線後的前後台持續維護，聚焦既有功能改善、後台編輯功能與查詢效能優化。",
		features: [
			{
				label: "SPARQL 查詢優化",
				detail: "重新設計查詢結構並調整索引使用方式，將搜尋等待時間優化約 80%",
			},
			{ label: "後台效能優化", detail: "改善後台搜尋結果載入時間" },
			{
				label: "技術支援與維護",
				detail: "處理上線後 Bug 修復與客戶反映問題排查，並依資料來源異動調整 SPARQL 查詢邏輯",
			},
			{
				label: "後台編輯功能維護",
				detail: "依需求開發新頁面與功能模組，優化既有功能操作體驗",
			},
		],
		stack: ["React", "SPARQL", "Node.js", "Firebase"],
		url: "https://tltc.nmtl.gov.tw/zh-tw/home",
	},
	{
		id: "hkbdb",
		name: "香港作家及藝術家傳記資料庫",
		period: "2023.07 — 2026.07",
		description:
			"香港作家及藝術家傳記資料庫是收錄香港作家與藝術家傳記資料的檢索平台，負責整體前後端開發，包含資料顯示、SPARQL 資料抓取邏輯，並設計使用者提交修改建議的協作機制與對應後台編輯系統。",
		features: [
			{ label: "作家／藝術家資料搜尋與篩選", detail: "使用者可查詢並瀏覽傳記資料" },
			{ label: "資料抓取與顯示", detail: "透過 SPARQL 查詢 Fuseki 資料來源，將資料呈現於前台頁面" },
			{
				label: "Suggestion 協作功能",
				detail: "使用者可提交資料修改建議，讓一般使用者也能協助勘誤資料庫內容",
			},
			{ label: "後台審核／編輯系統", detail: "管理員可審核使用者提交的建議並編輯資料內容" },
		],
		stack: ["React", "Node.js", "SPARQL", "Firebase"],
		url: "https://hkbdb.lib.cuhk.edu.hk/zh-hans",
	},
	{
		id: "green-road",
		name: "綠道路",
		period: "2026.04 — 2026.07",
		description:
			"綠道路是推動永續道路與申請綠道路認證的平台，採用 Next.js、Payload CMS、PostgreSQL 與 Docker 建置，獨立負責首頁開發與使用者系統架構設計。",
		features: [
			{ label: "案例與審查資訊展示", detail: "首頁呈現綠道路相關案例，以及審查委員資訊" },
			{ label: "會員登入／註冊", detail: "支援不同角色權限的使用者系統" },
			{
				label: "Payload CMS 後台開發",
				detail: "設計內容模型（Collections），並開發自訂 Admin UI 組件與對應後端邏輯",
			},
			{
				label: "Audit Log 稽核紀錄",
				detail:
					"利用 Payload CMS 內建 hooks 機制，記錄每次資料庫異動的操作者、時間戳、操作類型（新增／修改／刪除）與變更前後的資料差異，確保資料異動可追蹤、可回溯",
			},
		],
		stack: ["Next.js", "Payload CMS", "PostgreSQL", "Docker"],
		unavailableNote: "客戶尚未正式對外發布",
	},
];

export const skills = [
	{
		title: "前端框架",
		items: [
			"React.js / Next.js / TypeScript",
			"Tanstack Query / Zustand / Redux",
			"Context API / React Router",
			"Zod",
			"Leaflet",
			"Tailwind CSS / MUI / Shadcn-ui",
		],
	},
	{
		title: "後端與資料",
		items: [
			"Node.js / Express.js",
			"SPARQL / Fuseki",
			"Firebase / Supabase",
			"RESTful API / axios",
		],
	},
	{
		title: "測試與工具",
		items: ["Playwright / Vitest", "網站無障礙化改善", "Docker / Nginx / PM2", "Git / CI/CD"],
	},
	{
		title: "其他",
		items: ["SEO", "Google Analytics", "GCP Cloud Scheduler", "Claude Code"],
	},
] as const;
