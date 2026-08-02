/* =====================================================================
   K&C인증원 홈페이지 동작 스크립트
   - content.md 를 읽어서 index.html 의 빈 뼈대에 글자를 채웁니다.
   - 메뉴/드롭다운, 스크롤 애니메이션, 숫자 카운트, 문의 폼을 처리합니다.
   ※ 이 파일은 손대지 않아도 됩니다. 내용 수정은 content.md 에서 하세요.
   ===================================================================== */

/* ---------------------------------------------------------------------
   내용 파일(content.md) 불러오기
   ※ index.html 을 그냥 더블클릭해서 열면 브라우저 보안정책 때문에
     content.md 를 읽지 못합니다. 이때는 화면 위에 안내문이 뜨고,
     아래 예비 내용(FALLBACK)으로 표시됩니다.
     → 웹에 올리거나 로컬 서버로 열면 항상 content.md 가 반영됩니다.
   --------------------------------------------------------------------- */
const FALLBACK_MD = `
회사명: K&C인증원
영문사명: K&C Certification Office
로고글자: K&C인증원

히어로_소제목: CERTIFICATION TOTAL SOLUTION
히어로_제목: 인증의 시작부터 완료까지,\\n하나로 끝내는 파트너
히어로_설명: 국내·해외 인증부터 ISO·기업인증까지, 복잡한 인증 절차를 한 곳에서 해결해 드립니다.
히어로_버튼1: 무료 상담 문의
히어로_버튼2: 사업분야 보기
히어로_배지: 국내 KC인증, 에너지효율등급, CE, FCC, PSE, UL, CCC, ISO 인증, KS인증 컨설팅, EMC, RF, SAFETY, 안전인증, 안전확인, 공급자적합성

회사소개_소제목: COMPANY
회사소개_제목: 인증 컨설팅 전문기업\\nK&C인증원입니다
회사소개_본문: 국내인증·해외인증·기업(확인)인증을 아우르는 인증 컨설팅 전문기업입니다.
숫자1_값: 13
숫자1_접미사: 년
숫자1_라벨: 인증 컨설팅 경력
숫자2_값: 16
숫자2_접미사: 개
숫자2_라벨: 인증 서비스 항목
숫자3_값: 1500
숫자3_접미사: +
숫자3_라벨: 누적 인증 실적
숫자4_값: 98
숫자4_접미사: %
숫자4_라벨: 고객 만족도

사업분야_소제목: BUSINESS
사업분야_제목: 사업 분야
사업분야_설명: 국내·해외 인증부터 기업(확인)인증까지 한 곳에서 지원합니다.

[사업분야그룹]
국내인증 | DOMESTIC | 국내 판매·유통에 필요한 필수 인증
해외인증 | OVERSEAS | 해외 수출을 위한 국가별 강제·필수 인증
기업(확인)인증 | ENTERPRISE | 기업 경쟁력과 정책 혜택을 높이는 인증·확인 제도

[국내인증]
KC | 국내 KC인증 | 전기·전자·생활용품 등 KC 안전인증과 전자파(EMC) 대응
ENERGY | 에너지효율등급 | 에너지소비효율 등급표시 대상 제품 신고·시험 대행
HIGHEFF | 고효율에너지기자재 인증 | 고효율기자재 인증 대상 품목 시험·신청 지원
SAFETY | 안전인증 및 안전확인 (공급자적합성확인) | 안전인증·안전확인·자율안전확인 전 과정 대응

[해외인증]
CE | CE · 유럽 | 유럽 수출을 위한 CE 마킹 적합성 평가
FCC | FCC · 미국 | 미국 전자파 적합성 FCC 인증
PSE | PSE · 일본 | 일본 전기용품 안전 PSE 인증
UL | UL · 북미 | 북미 시장 진입을 위한 UL 안전 인증
CCC | CCC · 중국 | 중국 강제인증제도 CCC 취득

[기업(확인)인증]
ISO | ISO 9001·14001·45001 | 품질·환경·안전보건 경영시스템 인증
KS | KS인증 컨설팅 | 한국산업표준(KS) 인증 취득 컨설팅
MAINBIZ | 메인비즈 인증 | 경영혁신형 중소기업(MainBiz) 확인
INNOBIZ | 이노비즈 인증 | 기술혁신형 중소기업(INNO-BIZ) 확인
VENTURE | 벤처기업 확인 | 벤처기업 확인 취득 지원
RND | 기업부설연구소·개발전담부서 설립 | 연구소/전담부서 설립 신고 지원
DIRECT | 직접생산확인 | 공공조달 직접생산확인 취득 지원

오시는길_소제목: LOCATION
오시는길_제목: 오시는 길
주소: 경기도 의왕시 민백1길 5 경원벨리 2층 202호
전화: 010-3285-3040
이메일: jonkim924@gmail.com
영업시간: 평일 09:00 - 18:00 (점심 12:00 - 13:00 / 주말·공휴일 휴무)

지사주소: 경기도 고양시 덕양구 꽃마을로 34, 5층 526호 (향동동, 디엠씨스타팰리스)
지사전화: 010-9479-4919
지사이메일: standard4919@gmail.com

문의_소제목: CONTACT
문의_제목: 인증, 무엇이든 문의하세요
문의_설명: 제품·업종과 필요한 인증을 남겨주시면 영업일 기준 2일 이내에 맞춤 상담을 드립니다.
문의폼주소: mailto

푸터_문구: 국내·해외 인증부터 기업 인증까지, 정직과 신뢰로 함께하는 인증 파트너가 되겠습니다.
저작권: © 2026 K&C인증원. All rights reserved.

[회사소개_하위]
인사말: #company
회사 현황: #stats

[오시는길_하위]
찾아오시는 길: #location
연락처 안내: #location

[문의하기_하위]
온라인 문의: #contact
`;

/* =====================================================================
   1) content.md 파서
      - "항목명: 내용"        → 일반 값
      - [사업분야그룹]         → "이름 | 영문 | 설명"
      - [그룹이름]            → "마크ID | 인증이름 | 설명"
      - [○○_하위]            → "보이는 이름: 이동할 곳"
      - # 으로 시작하는 줄     → 설명(메모). 화면에 안 나옴
   ===================================================================== */
function parseContent(raw) {
  const data = {}, lists = {}, groups = [], items = {};
  const groupNames = new Set();
  let mode = 'kv', curList = null, curGroup = null;

  for (const line of raw.split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;

    const m = t.match(/^\[(.+)\]$/);
    if (m) {
      const name = m[1].trim();
      if (name === '사업분야그룹') { mode = 'groups'; continue; }
      if (groupNames.has(name)) { mode = 'items'; curGroup = name; items[name] = items[name] || []; continue; }
      mode = 'list'; curList = name; lists[name] = []; continue;
    }

    if (mode === 'groups') {
      if (t.includes('|')) {
        const p = t.split('|').map(s => s.trim());
        const g = { name: p[0] || '', eng: p[1] || '', desc: p[2] || '' };
        groups.push(g); groupNames.add(g.name); items[g.name] = [];
        continue;
      }
      mode = 'kv';           /* '|' 없는 줄 → 그룹 목록 끝 */
    }

    if (mode === 'items') {
      if (t.includes('|')) {
        const p = t.split('|').map(s => s.trim());
        items[curGroup].push({ mark: p[0] || '', title: p[1] || '', desc: p[2] || '' });
        continue;
      }
      mode = 'kv';           /* '|' 없는 줄 → 항목 목록 끝 */
    }

    if (mode === 'list') {
      const i = t.indexOf(':');
      if (i > -1) { lists[curList].push({ name: t.slice(0, i).trim(), href: t.slice(i + 1).trim() }); continue; }
      mode = 'kv';
    }

    const i = t.indexOf(':');
    if (i > -1) data[t.slice(0, i).trim()] = t.slice(i + 1).trim();
  }
  return { data, lists, groups, items };
}

/* HTML 특수문자 escape (내용에 <, > 를 써도 안전하게) */
const esc = s => (s == null ? '' : String(s))
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
/* \n(역슬래시+n) → 줄바꿈 */
const nl = s => esc(s).replace(/\\n/g, '<br>');

/* =====================================================================
   2) 인증 마크(로고)
      마크 그림은 모두 marks 폴더 안의 파일입니다. (외부 주소 없음)
        marks/kc.svg       marks/energy.svg   marks/higheff.svg  marks/safety.svg
        marks/ce.svg       marks/fcc.svg      marks/pse.svg      marks/ul.svg
        marks/ccc.svg      marks/iso.svg      marks/ks.svg       marks/mainbiz.svg
        marks/innobiz.svg  marks/venture.svg  marks/rnd.svg      marks/direct.svg
      ★ 로고를 바꾸고 싶으면 위 파일을 덮어쓰면 됩니다.
        png 로 바꾸고 싶으면 같은 이름의 .png 를 넣어두면 그것도 자동으로 씁니다.
        (예: marks/kc.png)
   ===================================================================== */
/* 마크 파일이 아예 없을 때만 쓰는 기본 그림 */
const DEFAULT_MARK = `<svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 64 64"><circle cx="32" cy="32" r="28" fill="none" stroke="#1769c0" stroke-width="3"/><path d="M22 32l7 7 14-15" fill="none" stroke="#1769c0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

/* marks/○○.svg → 없으면 marks/○○.png → 그것도 없으면 기본 그림 */
window.markFallback = function (img) {
  if (img.src.endsWith('.svg')) { img.src = img.src.slice(0, -4) + '.png'; return; }
  img.onerror = null;
  img.parentNode.innerHTML = DEFAULT_MARK;
};

/* =====================================================================
   3) 화면에 내용 채우기
   ===================================================================== */
function render(parsed) {
  const { data, lists, groups, items } = parsed;
  const $ = id => document.getElementById(id);

  /* ---- 기본 정보(회사명/로고) ---- */
  const company = data['회사명'] || 'K&C인증원';
  document.title = company + ' | 인증 컨설팅 전문기업';

  const initials = (data['영문사명'] || 'KC')
    .replace(/[^A-Za-z& ]/g, '').split(/\s|&/).filter(Boolean)
    .slice(0, 2).map(w => w[0]).join('').toUpperCase() || 'KC';
  /* 머리말 로고는 marks/kc_company_logo_200x200.png 이미지를 씁니다.
     (index.html 안에 들어 있으므로 여기서 글자로 덮어쓰지 않습니다) */
  $('logoText').textContent = data['로고글자'] || company;
  $('footBrand').textContent = company;

  /* 회사소개 도장(seal): "K&C인증원" → 앞의 영문(K&C) / 뒤의 한글(인증원) 으로 분리 */
  const seal = company.match(/^([A-Za-z&.\-\s]+)(.+)$/);
  $('sealMark').textContent = seal ? seal[1].trim() : initials;
  $('sealText').textContent = seal ? seal[2].trim() : company;

  /* ---- 히어로 ---- */
  $('heroEyebrow').textContent = data['히어로_소제목'] || '';
  $('heroTitle').innerHTML = nl(data['히어로_제목']);
  $('heroDesc').innerHTML = nl(data['히어로_설명']);
  $('heroBtn1').innerHTML = esc(data['히어로_버튼1'] || '문의하기') + ' &nbsp;→';
  $('heroBtn2').textContent = data['히어로_버튼2'] || '사업분야 보기';

  /* 한글 문구는 윗줄, 영문 문구는 아랫줄로 나눠서 표시 */
  const badges = (data['히어로_배지'] || '').split(',').map(s => s.trim()).filter(Boolean);
  const chips = arr => arr.map(s => '<span>' + esc(s) + '</span>').join('');
  const ko = badges.filter(s => /[가-힣]/.test(s));
  const en = badges.filter(s => !/[가-힣]/.test(s));
  $('heroBadges').innerHTML = chips(ko) + (ko.length && en.length ? '<i class="brk"></i>' : '') + chips(en);

  /* ---- 회사소개 ---- */
  $('companyEyebrow').textContent = data['회사소개_소제목'] || '';
  $('companyTitle').innerHTML = nl(data['회사소개_제목']);
  $('companyBody').textContent = data['회사소개_본문'] || '';

  /* ---- 통계(숫자 카운트) ---- */
  $('statsGrid').innerHTML = [1, 2, 3, 4].map(i => {
    const v = data['숫자' + i + '_값'];
    if (v === undefined) return '';
    return '<div class="stat reveal"><div class="num">' +
      '<span class="count" data-target="' + esc(v) + '">0</span>' +
      '<span class="suf">' + esc(data['숫자' + i + '_접미사'] || '') + '</span></div>' +
      '<div class="lab">' + esc(data['숫자' + i + '_라벨'] || '') + '</div></div>';
  }).join('');

  /* ---- 사업분야(그룹 + 인증 마크) ---- */
  $('bizEyebrow').textContent = data['사업분야_소제목'] || '';
  $('bizTitle').textContent = data['사업분야_제목'] || '';
  $('bizDesc').textContent = data['사업분야_설명'] || '';
  $('bizGroups').innerHTML = groups.map((g, gi) => {
    const its = items[g.name] || [];
    return '<div class="biz-group reveal" id="biz-g' + gi + '">' +
      '<div class="biz-group-head"><div>' +
        '<span class="biz-group-eng">' + esc(g.eng) + '</span>' +
        '<h3 class="biz-group-name">' + esc(g.name) + '</h3>' +
      '</div>' +
      (g.desc ? '<p class="biz-group-desc">' + esc(g.desc) + '</p>' : '') +
      '</div><div class="biz-items">' +
      its.map(it =>
        '<div class="biz-item"><div class="mark" data-mark="' + esc(it.mark) + '">' +
          '<img src="marks/' + encodeURIComponent(it.mark.toLowerCase()) + '.svg" alt="' + esc(it.title) + ' 인증 마크" onerror="markFallback(this)">' +
        '</div><h4>' + esc(it.title) + '</h4>' +
        (it.desc ? '<p>' + esc(it.desc) + '</p>' : '') + '</div>'
      ).join('') +
      '</div></div>';
  }).join('');
  /* 캐시 등으로 onerror 가 이미 지나간 이미지 처리 */
  document.querySelectorAll('#bizGroups .mark[data-mark] img').forEach(img => {
    if (img.complete && img.naturalWidth === 0) window.markFallback(img);
  });

  /* ---- 오시는 길 ---- */
  const addr = data['주소'] || '';
  const tel = data['전화'] || '';
  const mail = data['이메일'] || '';
  $('locEyebrow').textContent = data['오시는길_소제목'] || '';
  $('locTitle').textContent = data['오시는길_제목'] || '';
  $('mapFrame').src = 'https://www.google.com/maps?q=' + encodeURIComponent(addr) + '&hl=ko&z=17&output=embed';
  $('locInfo').innerHTML = [
    { t: '주소', v: esc(addr), ic: '<path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>' },
    { t: '전화', v: tel ? '<a href="tel:' + tel.replace(/[^0-9+]/g, '') + '">' + esc(tel) + '</a>' : '', ic: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2z"/>' },
    { t: '이메일', v: mail ? '<a href="mailto:' + esc(mail) + '">' + esc(mail) + '</a>' : '', ic: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>' },
    { t: '영업시간', v: esc(data['영업시간'] || ''), ic: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>' }
  ].filter(x => x.v).map(x =>
    '<div class="loc-item"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + x.ic + '</svg></div>' +
    '<div><h4>' + x.t + '</h4><p>' + x.v + '</p></div></div>'
  ).join('');

  /* ---- 문의하기 ---- */
  $('ctEyebrow').textContent = data['문의_소제목'] || '';
  $('ctTitle').textContent = data['문의_제목'] || '';
  $('ctDesc').textContent = data['문의_설명'] || '';
  $('ctInfo').innerHTML = [
    { ic: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 4.2 8.6 19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7 12 12 0 0 0 .7 2.8 2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5 12 12 0 0 0 2.8.7A2 2 0 0 1 22 16.9z"/>', v: tel },
    { ic: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>', v: mail },
    { ic: '<path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>', v: addr }
  ].filter(x => x.v).map(x =>
    '<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + x.ic + '</svg>' + esc(x.v) + '</li>'
  ).join('');

  /* 문의 폼의 "관심 인증 분야" 목록 = 사업분야 그룹/항목 */
  const sel = $('serviceSelect');
  groups.forEach(g => {
    const og = document.createElement('optgroup');
    og.label = g.name;
    (items[g.name] || []).forEach(it => {
      const o = document.createElement('option');
      o.value = it.title; o.textContent = it.title;
      og.appendChild(o);
    });
    sel.appendChild(og);
  });

  /* ---- 푸터 ---- */
  $('footMsg').innerHTML = nl(data['푸터_문구'] || '');
  const footBlock = (label, lines) =>
    '<b>' + label + '</b><br>' + lines.filter(Boolean).map(esc).join('<br>');
  $('footContact').innerHTML =
    footBlock('본사', [addr, tel && 'T. ' + tel, mail && 'E. ' + mail]) +
    (data['지사주소'] || data['지사전화'] || data['지사이메일']
      ? '<br><br>' + footBlock('지사', [
          data['지사주소'],
          data['지사전화'] && 'T. ' + data['지사전화'],
          data['지사이메일'] && 'E. ' + data['지사이메일']
        ])
      : '');
  $('footCopy').textContent = data['저작권'] || '';

  /* ---- 메뉴 드롭다운 ---- */
  const fillSub = (key, attr) => {
    const box = document.querySelector('.dropdown[data-sub="' + attr + '"]');
    if (!box) return;
    const arr = lists[key] || [];
    if (!arr.length) { box.remove(); return; }
    box.innerHTML = arr.map(it => '<li><a href="' + esc(it.href) + '">' + esc(it.name) + '</a></li>').join('');
  };
  fillSub('회사소개_하위', 'company');
  fillSub('오시는길_하위', 'location');
  fillSub('문의하기_하위', 'contact');
  /* 사업분야 하위목록은 그룹에서 자동 생성 */
  document.querySelector('.dropdown[data-sub="business"]').innerHTML =
    groups.map((g, gi) => '<li><a href="#biz-g' + gi + '">' + esc(g.name) + '</a></li>').join('');

  /* ---- 문의 폼 전송 방식 ---- */
  setupForm((data['문의폼주소'] || 'mailto').trim(), mail);
}

/* =====================================================================
   4) 문의 폼
   ===================================================================== */
function setupForm(formTarget, email) {
  const note = document.getElementById('formNote');
  note.textContent = formTarget.startsWith('http')
    ? '* 접수 즉시 담당자에게 전달됩니다.'
    : '* 보내기를 누르면 메일 작성창이 열립니다.';

  document.getElementById('inquiryForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const f = e.target, fd = new FormData(f);

    if (formTarget.startsWith('http')) {
      fetch(formTarget, { method: 'POST', body: fd, headers: { 'Accept': 'application/json' } })
        .then(r => {
          if (!r.ok) throw new Error('전송 실패');
          alert('문의가 접수되었습니다. 감사합니다!');
          f.reset();
        })
        .catch(() => alert('전송에 실패했습니다. 잠시 후 다시 시도해 주세요.'));
      return;
    }

    const subject = encodeURIComponent('[홈페이지 문의] ' + (fd.get('name') || ''));
    const body = encodeURIComponent(
      '■ 이름/회사명: ' + (fd.get('name') || '') + '\n' +
      '■ 연락처: ' + (fd.get('phone') || '') + '\n' +
      '■ 이메일: ' + (fd.get('email') || '') + '\n' +
      '■ 관심 분야: ' + (fd.get('service') || '') + '\n\n' +
      '■ 문의 내용:\n' + (fd.get('message') || '')
    );
    window.location.href = 'mailto:' + email + '?subject=' + subject + '&body=' + body;
  });
}

/* =====================================================================
   5) 인터랙션 (메뉴 / 등장 애니메이션 / 숫자 카운트 / 맨 위로)
   ===================================================================== */
function setupInteractions() {
  const menu = document.getElementById('menu');
  const hamb = document.getElementById('hamb');
  hamb.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

  const animateCount = el => {
    const target = parseFloat(el.dataset.target) || 0;
    const dur = 1400, start = performance.now();
    (function step(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * target).toLocaleString();
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString();
    })(start);
  };

  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add('in');
      en.target.querySelectorAll('.count').forEach(c => {
        if (!c.dataset.done) { c.dataset.done = 1; animateCount(c); }
      });
      io.unobserve(en.target);
    });
  }, { threshold: .15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  const toTop = document.getElementById('toTop');
  addEventListener('scroll', () => toTop.classList.toggle('show', scrollY > 500));
  toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));
}

/* =====================================================================
   6) 시작
   ===================================================================== */
async function init() {
  let raw = null;
  try {
    const res = await fetch('content.md', { cache: 'no-store' });
    if (res.ok) raw = await res.text();
  } catch (err) {
    /* file:// 로 직접 열면 여기로 옵니다 */
  }

  if (raw === null) {
    raw = FALLBACK_MD;
    document.getElementById('fileNotice').innerHTML =
      '<div class="file-notice"><b>미리보기 모드입니다.</b> ' +
      '파일을 직접 열면 브라우저 보안정책 때문에 <b>content.md</b> 를 읽을 수 없어 예비 내용이 표시됩니다. ' +
      '웹에 올리거나 로컬 서버로 열면 content.md 수정 내용이 그대로 반영됩니다.</div>';
    console.info('content.md 를 불러오지 못해 예비 내용으로 표시합니다.');
  }

  render(parseContent(raw));
  setupInteractions();
}

document.addEventListener('DOMContentLoaded', init);
