/* =====================================================================
   홈페이지 동작 스크립트
   - content.md 를 읽어서 화면의 글자를 채웁니다.
   - 메뉴 열기/닫기, 스크롤 애니메이션, 숫자 카운트, 문의 폼을 처리합니다.
   ※ 이 파일은 손대지 않아도 됩니다. 내용 수정은 content.md 에서 하세요.
   ===================================================================== */

/* content.md 를 못 읽는 경우(예: 파일을 그냥 더블클릭해서 열었을 때)를 대비한
   기본값입니다. content.md 가 정상적으로 읽히면 아래 값은 자동으로 덮어써집니다. */
const DEFAULT_CONTENT = {
  "로고글자": "BLUE COMPANY",
  "회사명": "(주)블루컴퍼니",
  "히어로_소제목": "TRUST & GROWTH PARTNER",
  "히어로_제목": "신뢰로 만드는 미래,\\n함께 성장하는 파트너",
  "히어로_설명": "축적된 경험과 노하우로 고객의 성공을 최우선으로 생각합니다.\\n블루컴퍼니가 여러분의 든든한 파트너가 되겠습니다.",
  "히어로_버튼1": "문의하기",
  "히어로_버튼2": "회사소개 보기",
  "회사소개_소제목": "COMPANY",
  "회사소개_제목": "블루컴퍼니와 함께라면\\n성공할 수 있습니다",
  "회사소개_본문": "저희는 2004년 설립된 전문 기업으로, 고객의 경쟁력과 가치를 높이기 위해 오늘도 고민하고 도전하며 실천합니다. 정직과 신뢰를 바탕으로 최고의 결과를 만들어 드리겠습니다.",
  "숫자1_값": "20", "숫자1_접미사": "년", "숫자1_라벨": "업력",
  "숫자2_값": "12", "숫자2_접미사": "개", "숫자2_라벨": "사업 분야",
  "숫자3_값": "1500", "숫자3_접미사": "+", "숫자3_라벨": "누적 실적",
  "숫자4_값": "98", "숫자4_접미사": "%", "숫자4_라벨": "고객 만족도",
  "사업분야_소제목": "BUSINESS",
  "사업분야_제목": "사업 분야",
  "사업분야_설명": "블루컴퍼니가 제공하는 핵심 사업 분야를 소개합니다.",
  "오시는길_소제목": "LOCATION",
  "오시는길_제목": "오시는 길",
  "주소": "서울특별시 강남구 테헤란로 123 블루빌딩 8층",
  "전화": "02-1234-5678",
  "팩스": "02-1234-5679",
  "이메일": "contact@bluecompany.co.kr",
  "영업시간": "평일 09:00 - 18:00 (점심 12:00 - 13:00 / 주말·공휴일 휴무)",
  "문의_소제목": "CONTACT",
  "문의_제목": "무엇을 도와드릴까요?",
  "문의_설명": "궁금한 점을 남겨주시면 영업일 기준 2일 이내에 답변드립니다.",
  "문의폼주소": "mailto",
  "푸터_문구": "정직과 신뢰로 고객과 함께 성장하는 기업이 되겠습니다.",
  "저작권": "© 2026 BLUE COMPANY. All rights reserved.",
  "_사업분야": [
    { "제목": "컨설팅 서비스", "설명": "고객 맞춤형 전략 수립부터 실행까지, 체계적인 프로세스로 성공을 지원합니다." },
    { "제목": "솔루션 개발", "설명": "현장에 최적화된 솔루션을 설계하고 구축하여 업무 효율을 높입니다." },
    { "제목": "제품 공급", "설명": "검증된 품질의 제품을 안정적으로 공급하여 신뢰를 드립니다." },
    { "제목": "유지 관리", "설명": "도입 이후에도 지속적인 사후 관리로 안심하고 사용하실 수 있습니다." }
  ],
  "_회사소개_하위": [{ "인사말": "#company", "회사 현황": "#stats" }],
  "_오시는길_하위": [{ "찾아오시는 길": "#location", "연락처 안내": "#location" }],
  "_문의하기_하위": [{ "온라인 문의": "#contact" }]
};

/* 사업분야 카드에 순서대로 들어갈 아이콘(SVG) */
const CARD_ICONS = [
  '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
  '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
  '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
];

/* ---------- content.md 파서 (단순 형식 전용) ---------- */
function parseContent(text) {
  const data = {};
  const blocks = {};
  let currentBlock = null;   // 현재 [블록] 이름
  let currentItem = null;    // 블록 안의 현재 항목

  text.split(/\r?\n/).forEach((raw) => {
    const line = raw.trim();
    if (line === "") return;                               // 빈 줄 무시
    if (line.startsWith("#")) {                            // 주석(섹션 구분)에서 블록 종료
      currentBlock = null; currentItem = null; return;
    }

    // [블록] 시작
    const blockMatch = line.match(/^\[(.+?)\]$/);
    if (blockMatch) {
      currentBlock = blockMatch[1].trim();
      blocks[currentBlock] = [];
      currentItem = {};
      blocks[currentBlock].push(currentItem);
      return;
    }
    // 블록 안 항목 구분선 ---
    if (currentBlock && line === "---") {
      currentItem = {};
      blocks[currentBlock].push(currentItem);
      return;
    }
    // "키: 값"
    const idx = line.indexOf(":");
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    const val = line.slice(idx + 1).trim();
    if (currentBlock) { currentItem[key] = val; }
    else { data[key] = val; }
  });

  // 블록은 언더바를 붙여 저장 (예: _사업분야)
  Object.keys(blocks).forEach((name) => {
    data["_" + name] = blocks[name].filter((o) => Object.keys(o).length > 0);
  });
  return data;
}

/* \n 을 실제 줄바꿈(<br>)으로, 나머지는 안전하게 이스케이프 */
function withLineBreaks(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML.replace(/\\n/g, "<br>");
}
function onlyDigits(str) { return (str || "").replace(/[^\d]/g, ""); }

/* ---------- 화면에 내용 채우기 ---------- */
function applyContent(data) {
  // 일반 텍스트
  document.querySelectorAll("[data-content]").forEach((el) => {
    const key = el.getAttribute("data-content");
    if (data[key] !== undefined) el.innerHTML = withLineBreaks(data[key]);
  });

  // 숫자(카운트업 대상): data-target 갱신
  document.querySelectorAll("[data-content-num]").forEach((el) => {
    const key = el.getAttribute("data-content-num");
    if (data[key] !== undefined) el.setAttribute("data-target", onlyDigits(data[key]) || "0");
  });

  // 전화 링크
  document.querySelectorAll("[data-content-tel]").forEach((el) => {
    const key = el.getAttribute("data-content-tel");
    if (data[key] !== undefined) { el.textContent = data[key]; el.setAttribute("href", "tel:" + onlyDigits(data[key])); }
  });
  const qc = document.getElementById("quickCall");
  if (qc && data["전화"]) qc.setAttribute("href", "tel:" + onlyDigits(data["전화"]));

  // 이메일 링크
  document.querySelectorAll("[data-content-mail]").forEach((el) => {
    const key = el.getAttribute("data-content-mail");
    if (data[key] !== undefined) { el.textContent = data[key]; el.setAttribute("href", "mailto:" + data[key]); }
  });

  // 지도 주소
  const map = document.getElementById("mapFrame");
  if (map && data["주소"]) {
    map.src = "https://maps.google.com/maps?q=" + encodeURIComponent(data["주소"]) + "&z=16&output=embed";
  }

  // 사업분야 카드 생성
  const cardsWrap = document.getElementById("businessCards");
  const items = data["_사업분야"];
  if (cardsWrap && Array.isArray(items) && items.length) {
    cardsWrap.innerHTML = "";
    items.forEach((item, i) => {
      const card = document.createElement("div");
      card.className = "card reveal";
      card.id = "biz-" + i;
      card.innerHTML =
        '<div class="card-icon">' + CARD_ICONS[i % CARD_ICONS.length] + '</div>' +
        '<h3>' + withLineBreaks(item["제목"] || "") + '</h3>' +
        '<p>' + withLineBreaks(item["설명"] || "") + '</p>';
      cardsWrap.appendChild(card);
    });
  }

  // 문의 폼 전송 방식 저장
  window.__FORM_ENDPOINT = (data["문의폼주소"] || "mailto").trim();
  window.__CONTACT_EMAIL = data["이메일"] || "";

  // 메뉴 하위목록(드롭다운) 생성
  buildSubmenus(data);
}

/* ---------- 메뉴 하위목록(드롭다운) 만들기 ---------- */
function buildSubmenus(data) {
  document.querySelectorAll(".nav-item").forEach((item) => {
    const ul = item.querySelector(".submenu");
    if (!ul) return;
    const subKey = item.getAttribute("data-sub");
    let entries = []; // { label, href }

    if (subKey === "__business_auto") {
      // 사업분야는 카드에서 자동 생성 (제목 → 해당 카드로 이동)
      const cards = data["_사업분야"] || [];
      entries = cards.map((c, i) => ({ label: c["제목"] || "", href: "#biz-" + i }));
    } else if (subKey && data["_" + subKey] && data["_" + subKey][0]) {
      // content.md 의 "이름: 이동할곳" 목록을 순서대로 읽음
      const obj = data["_" + subKey][0];
      entries = Object.keys(obj).map((k) => ({ label: k, href: obj[k] }));
    }

    ul.innerHTML = "";
    // 항목이 없으면 하위목록 자체를 없앰
    if (!entries.length) { item.classList.remove("has-sub"); ul.remove(); return; }

    entries.forEach((e) => {
      if (!e.label) return;
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.setAttribute("href", e.href || "#");
      a.textContent = e.label;
      li.appendChild(a);
      ul.appendChild(li);
    });
    item.classList.add("has-sub");
  });
}

/* ---------- 스크롤 등장 애니메이션 ---------- */
function setupReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.14 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

/* ---------- 숫자 카운트업 ---------- */
function setupCounters() {
  const nums = document.querySelectorAll(".count");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.getAttribute("data-target") || "0", 10);
      const dur = 1400; const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased).toLocaleString("ko-KR");
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  nums.forEach((el) => io.observe(el));
}

/* ---------- 헤더 스크롤 + 모바일 메뉴 ---------- */
function setupNav() {
  const header = document.getElementById("header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.classList.toggle("active", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
  });
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      nav.classList.remove("open");
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

/* ---------- 문의 폼 제출 ---------- */
function setupForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.className = "form-status";

    const name = form.querySelector("#f-name").value.trim();
    const phone = form.querySelector("#f-phone").value.trim();
    const message = form.querySelector("#f-message").value.trim();
    const agree = form.querySelector("#f-agree").checked;
    const company = form.querySelector("#f-company").value.trim();
    const email = form.querySelector("#f-email").value.trim();

    if (!name || !phone || !message) { status.className = "form-status error"; status.textContent = "이름, 연락처, 문의 내용을 입력해 주세요."; return; }
    if (!agree) { status.className = "form-status error"; status.textContent = "개인정보 수집 및 이용에 동의해 주세요."; return; }

    const endpoint = window.__FORM_ENDPOINT || "mailto";

    // 1) Formspree 등 실제 전송 주소가 설정된 경우
    if (/^https?:\/\//i.test(endpoint)) {
      try {
        status.textContent = "전송 중입니다...";
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Accept": "application/json" },
          body: new FormData(form)
        });
        if (res.ok) { form.reset(); status.textContent = "문의가 정상적으로 접수되었습니다. 감사합니다!"; }
        else { throw new Error("전송 실패"); }
      } catch (err) {
        status.className = "form-status error";
        status.textContent = "전송에 실패했습니다. 잠시 후 다시 시도하거나 전화로 문의해 주세요.";
      }
      return;
    }

    // 2) 기본값(mailto): 메일 프로그램으로 내용을 채워 열어줌
    const to = window.__CONTACT_EMAIL || "";
    const subject = encodeURIComponent("[홈페이지 문의] " + name + (company ? " / " + company : ""));
    const body = encodeURIComponent(
      "이름: " + name + "\n" +
      "회사/단체명: " + company + "\n" +
      "연락처: " + phone + "\n" +
      "이메일: " + email + "\n\n" +
      "문의 내용:\n" + message
    );
    window.location.href = "mailto:" + to + "?subject=" + subject + "&body=" + body;
    status.textContent = "메일 작성 창이 열립니다. 창이 뜨지 않으면 " + (to || "회사 이메일") + " 로 보내주세요.";
  });
}

/* ---------- 시작 ---------- */
async function init() {
  let data = DEFAULT_CONTENT;
  try {
    const res = await fetch("content.md", { cache: "no-store" });
    if (res.ok) {
      const text = await res.text();
      const parsed = parseContent(text);
      if (Object.keys(parsed).length) data = parsed;
    }
  } catch (err) {
    // content.md 를 못 읽으면(파일 더블클릭 등) 기본값으로 표시
    console.info("content.md 를 불러오지 못해 기본 내용으로 표시합니다. (로컬 서버로 열거나 배포하면 정상 반영됩니다.)");
  }
  applyContent(data);
  setupNav();
  setupReveal();
  setupCounters();
  setupForm();
}

document.addEventListener("DOMContentLoaded", init);
