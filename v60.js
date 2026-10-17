(()=>{'use strict';
const THEME_KEY='mymoney-v60-theme';const allowed=['blue','green','dark'];
function applyTheme(v){if(!allowed.includes(v))v='blue';document.documentElement.dataset.theme=v;try{localStorage.setItem(THEME_KEY,v)}catch(e){}document.querySelectorAll('.v60-theme').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.themeChoice===v)));const meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.content=v==='dark'?'#111827':v==='green'?'#15805e':'#2459a6'}
const settings=document.createElement('div');settings.className='v60-settings';settings.innerHTML=`<details id="v60Prefs"><summary>⚙️ 我的设置 · 主题与使用帮助</summary><div class="controls" role="group" aria-label="主题选择"><button type="button" class="v60-theme" data-theme-choice="blue">🔵 蓝白色</button><button type="button" class="v60-theme" data-theme-choice="green">🟢 清新绿</button><button type="button" class="v60-theme" data-theme-choice="dark">🌙 深色</button></div><p>主题只影响外观，独立保存于当前浏览器；不改变账本数据、负债、利息或还款记录。</p><div class="v60-help"><strong>📖 使用帮助</strong><p>①「记账」新增收入、支出和账户转账。②「负债」分别建立贷款及记录实际还款。③「报表」查看收支分析。④「备份」定期导出 JSON；换手机前务必保存备份文件。⑤ 资料仅储存在当前浏览器，不会自动同步到其他手机。</p><p>⚠️ 在浏览器清除网站数据或卸载 App 前，请先导出 JSON。不要把个人财务 JSON 上传至公开 GitHub。</p></div></details>`;
const main=document.querySelector('main.wrap');main.parentNode.insertBefore(settings,main);
settings.addEventListener('click',e=>{const b=e.target.closest('[data-theme-choice]');if(b)applyTheme(b.dataset.themeChoice)});
const tabs={home:'⌂ 首页',transactions:'＋ 记账',debts:'▣ 负债',analytics:'▥ 报表',backup:'⇩ 备份'};
for(const [id,label] of Object.entries(tabs)){const b=document.querySelector(`.tabs [data-tab="${id}"]`);if(b)b.textContent=label}
const title=document.querySelector('header h1');if(title)title.textContent='MyMoney V6.0';const subtitle=document.querySelector('header p');if(subtitle)subtitle.textContent='个人财务 · MYR · 本机储存 · V5.8 功能保留';
try{applyTheme(localStorage.getItem(THEME_KEY)||'blue')}catch(e){applyTheme('blue')}
})();
