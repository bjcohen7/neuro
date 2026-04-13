import{j as e}from"./index-CsVYYRXp.js";import{u as k,c as P,a as b}from"./vendor-router-Br-nnEsy.js";import{c as E}from"./trpc-Drkg8bJa.js";import"./vendor-react-_EBY-A7I.js";

// ─── Deep Dive Quiz Questions ────────────────────────────────────────────────
const SECTIONS=[
  {
    id:"cognitive",
    eyebrow:"🧠 Section 1 — Cognitive Battery",
    title:"Pattern & Reasoning",
    desc:"These questions measure how your brain identifies patterns, sequences, and logical relationships. There are no trick questions — go with your first instinct.",
    questions:[
      {
        id:"q1",type:"pattern-grid",
        text:"Which shape completes the pattern?",
        grid:["🔵","🔺","🟩","🔺","🟩","🔵","🟩","🔵","?"],
        options:[{label:"A",val:"A",display:"🔵"},{label:"B",val:"B",display:"🔺"},{label:"C",val:"C",display:"🟩"},{label:"D",val:"D",display:"🟨"}],
        correct:"B"
      },
      {
        id:"q2",type:"sequence",
        text:"What comes next in the sequence?",
        sequence:["2","6","18","54","?"],
        options:[{val:"A",display:"108"},{val:"B",display:"162"},{val:"C",display:"216"},{val:"D",display:"270"}],
        correct:"B"
      },
      {
        id:"q3",type:"odd-one-out",
        text:"Which one doesn't belong?",
        sub:"Look for the underlying rule — size, color, shape, or category.",
        options:[{val:"A",symbol:"🔴",label:"Red Circle",sub2:"Round · Solid"},{val:"B",symbol:"🔵",label:"Blue Circle",sub2:"Round · Solid"},{val:"C",symbol:"🟩",label:"Green Square",sub2:"Angular · Solid"},{val:"D",symbol:"🟡",label:"Yellow Circle",sub2:"Round · Solid"}],
        correct:"C"
      },
      {
        id:"q4",type:"rotation",
        text:"If you rotate this shape 90° clockwise, which option shows the result?",
        source:"↙️",
        options:[{val:"A",display:"↖️"},{val:"B",display:"↘️"},{val:"C",display:"↗️"},{val:"D",display:"↙️"}],
        correct:"B"
      },
      {
        id:"q5",type:"size-sequence",
        text:"What comes next in this size sequence?",
        options:[{val:"A",size:48},{val:"B",size:52},{val:"C",size:44},{val:"D",size:56}],
        correct:"B"
      },
      {
        id:"q6",type:"mirror",
        text:"Which option is the exact mirror image of the shape on the left?",
        source:"🔷",
        options:[{val:"A",display:"🔷"},{val:"B",display:"🔶"},{val:"C",display:"🔹"},{val:"D",display:"🔸"}],
        correct:"C"
      },
      {
        id:"q7",type:"moon-matrix",
        text:"Each row and column follows a rule. What fills the missing cell?",
        grid:["🌑","🌒","🌓","🌒","🌓","🌔","🌓","🌔","?"],
        options:[{val:"A",display:"🌔"},{val:"B",display:"🌕"},{val:"C",display:"🌖"},{val:"D",display:"🌑"}],
        correct:"B"
      },
      {
        id:"q8",type:"triangles",
        text:"How many triangles are hidden in this figure?",
        sub:"Count carefully — some triangles overlap or are formed by combining smaller ones.",
        options:[{val:"A",display:"4"},{val:"B",display:"5"},{val:"C",display:"6"},{val:"D",display:"8"}],
        correct:"C"
      },
      {
        id:"q9",type:"symbol-sub",
        text:"Using the key below, what number does ★ + ★ + ◆ equal?",
        key:[{sym:"★",val:4},{sym:"◆",val:7},{sym:"●",val:3}],
        expr:"★ + ★ + ◆",
        options:[{val:"A",display:"11"},{val:"B",display:"14"},{val:"C",display:"15"},{val:"D",display:"18"}],
        correct:"C"
      }
    ]
  },
  {
    id:"processing",
    eyebrow:"🔍 Section 2 — Processing Style",
    title:"How You Think",
    desc:"These questions explore how your brain naturally takes in information, makes decisions, and handles complexity. There are no right or wrong answers.",
    questions:[
      {
        id:"q10",type:"choice",
        text:"When you're solving a new problem, what happens first?",
        options:[{val:"A",symbol:"🗺️",label:"I map out the whole picture before touching any detail"},{val:"B",symbol:"🔬",label:"I dive into one piece and build outward from there"},{val:"C",symbol:"⚡",label:"I get an immediate gut sense of the answer, then check it"},{val:"D",symbol:"🔄",label:"I go back and forth between the big picture and details"}]
      },
      {
        id:"q11",type:"scale",
        text:"How often do you notice connections between things that seem unrelated to others?",
        scaleMin:"Rarely",scaleMax:"All the time"
      },
      {
        id:"q12",type:"scenario",
        text:"You're given a task with no clear instructions. Your first reaction is:",
        scenario:'"Here\'s the goal. Figure out how to get there."',
        options:[{val:"A",symbol:"😤",label:"Frustrated — I need more structure to start"},{val:"B",symbol:"🤔",label:"Curious — I like figuring out my own approach"},{val:"C",symbol:"😰",label:"Anxious — too many unknowns at once"}]
      },
      {
        id:"q13",type:"scale",
        text:"How easily can you switch between two very different tasks (e.g., creative work → spreadsheets)?",
        scaleMin:"Very difficult",scaleMax:"Effortless"
      },
      {
        id:"q14",type:"choice",
        text:"When you read something complex, how do you process it best?",
        options:[{val:"A",symbol:"📖",label:"Read it straight through, absorbing as I go"},{val:"B",symbol:"✏️",label:"Annotate, highlight, or take notes while reading"},{val:"C",symbol:"🔁",label:"Read it multiple times, each pass going deeper"},{val:"D",symbol:"🗣️",label:"Explain it to someone else to understand it"}]
      },
      {
        id:"q15",type:"scale",
        text:"How often do you experience sudden flashes of insight — an answer appearing fully formed?",
        scaleMin:"Almost never",scaleMax:"Regularly"
      },
      {
        id:"q16",type:"choice",
        text:"When making a decision, what do you trust most?",
        options:[{val:"A",symbol:"📊",label:"Data and evidence I can verify"},{val:"B",symbol:"🧭",label:"My gut instinct or intuition"},{val:"C",symbol:"🤝",label:"What others I respect think"},{val:"D",symbol:"⚖️",label:"A structured pros/cons analysis"}]
      },
      {
        id:"q17",type:"scale",
        text:"How well do you hold multiple pieces of information in mind at once (e.g., following multi-step verbal instructions)?",
        scaleMin:"Poorly",scaleMax:"Very well"
      }
    ]
  },
  {
    id:"environment",
    eyebrow:"🌍 Section 3 — Cognitive Environment",
    title:"Where Your Brain Thrives",
    desc:"These questions identify the conditions that help or hurt your thinking — noise, pressure, social load, and novelty.",
    questions:[
      {
        id:"q18",type:"choice",
        text:"Where do you do your best thinking?",
        options:[{val:"A",symbol:"🤫",label:"Complete silence"},{val:"B",symbol:"☕",label:"Low background noise (café, music)"},{val:"C",symbol:"🎧",label:"Headphones, specific music"},{val:"D",symbol:"🏃",label:"While moving or doing something else"}]
      },
      {
        id:"q19",type:"choice",
        text:"How does a deadline affect your thinking?",
        options:[{val:"A",symbol:"🚀",label:"It sharpens me — I think better under pressure"},{val:"B",symbol:"📉",label:"It shuts me down — pressure blocks my thinking"},{val:"C",symbol:"🎲",label:"It depends on whether I care about the task"}]
      },
      {
        id:"q20",type:"scale",
        text:"How much does social interaction drain your cognitive resources (even enjoyable interaction)?",
        scaleMin:"Not at all",scaleMax:"Significantly"
      },
      {
        id:"q21",type:"choice",
        text:"How do you respond to novel, unfamiliar challenges?",
        options:[{val:"A",symbol:"🔥",label:"Energized — novelty activates me"},{val:"B",symbol:"😬",label:"Cautious — I prefer familiar territory"},{val:"C",symbol:"🌊",label:"Overwhelmed at first, then I adapt"},{val:"D",symbol:"🔍",label:"Curious but methodical — I research before diving in"}]
      },
      {
        id:"q22",type:"scale",
        text:"How easily are you distracted by background noise or visual clutter when trying to focus?",
        scaleMin:"Not easily",scaleMax:"Very easily"
      },
      {
        id:"q23",type:"choice",
        text:"At what time of day is your thinking sharpest?",
        options:[{val:"A",symbol:"🌅",label:"Early morning"},{val:"B",symbol:"☀️",label:"Mid-morning to midday"},{val:"C",symbol:"🌇",label:"Afternoon"},{val:"D",symbol:"🌙",label:"Evening or night"}]
      }
    ]
  },
  {
    id:"self-awareness",
    eyebrow:"🪞 Section 4 — Self-Awareness",
    title:"How You See Your Own Mind",
    desc:"The final section looks at how accurately you perceive your own cognitive strengths and blind spots. This adds an important layer to your report.",
    questions:[
      {
        id:"q24",type:"scale",
        text:"How would you rate your own intelligence compared to most people?",
        sub:"Be honest — there's no judgment here. This is used to compare your self-perception against your actual cognitive battery results.",
        scaleMin:"Below average",scaleMax:"Well above average"
      },
      {
        id:"q25",type:"choice",
        text:"Which of these do you consider your strongest cognitive ability?",
        options:[{val:"A",symbol:"🔢",label:"Numbers & logic"},{val:"B",symbol:"🔗",label:"Seeing connections & patterns"},{val:"C",symbol:"📝",label:"Language & communication"},{val:"D",symbol:"🎨",label:"Spatial & visual thinking"}]
      },
      {
        id:"q26",type:"scale",
        text:"How often do you underestimate your own abilities until someone points them out?",
        scaleMin:"Rarely",scaleMax:"Very often"
      },
      {
        id:"q27",type:"choice",
        text:"When you fail at something, what's your most common first thought?",
        options:[{val:"A",symbol:"🧠",label:"I need to understand why — what went wrong?"},{val:"B",symbol:"😔",label:"I'm not good enough at this"},{val:"C",symbol:"🔄",label:"I'll try a different approach next time"},{val:"D",symbol:"🤷",label:"It wasn't the right fit for how I think"}]
      },
      {
        id:"q28",type:"scale",
        text:"How well do you understand your own cognitive strengths and limitations?",
        sub:"1 = I have little self-insight, 5 = I understand my mind very well",
        scaleMin:"Little insight",scaleMax:"Deep self-knowledge"
      }
    ]
  }
];

const ALL_QUESTIONS=SECTIONS.flatMap(s=>s.questions.map(q=>({...q,sectionId:s.id})));
const TOTAL=ALL_QUESTIONS.length;

// ─── Processing animation messages ──────────────────────────────────────────
const PROCESSING_STEPS=[
  "Analyzing your cognitive battery results...",
  "Calculating your IQ range...",
  "Mapping your 12 cognitive factors...",
  "Identifying your processing style...",
  "Comparing against population norms...",
  "Writing your personalized profile..."
];

// ─── Styles ──────────────────────────────────────────────────────────────────
const CSS=`
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
*{box-sizing:border-box;}
.dd-wrap{min-height:100vh;background:#F7F6F2;color:#1a1a2e;font-family:'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,sans-serif;}
.dd-nav{display:flex;align-items:center;justify-content:space-between;padding:16px 32px;background:#fff;border-bottom:1px solid #e8e5df;box-shadow:0 1px 4px rgba(0,0,0,0.06);}
.dd-nav-logo{color:#1a1a2e;font-weight:700;font-size:16px;display:flex;align-items:center;gap:8px;text-decoration:none;}
.dd-nav-badge{background:#5b52e8;border-radius:8px;padding:4px 8px;font-size:12px;color:#fff;}
.dd-nav-section{font-size:12px;color:#888;letter-spacing:1px;text-transform:uppercase;}
.dd-progress{background:#fff;border-bottom:1px solid #e8e5df;padding:14px 32px;}
.dd-progress-meta{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;}
.dd-progress-label{font-size:12px;color:#888;}
.dd-progress-count{font-size:12px;font-weight:700;color:#5b52e8;}
.dd-bar-bg{height:5px;background:#e8e5df;border-radius:3px;}
.dd-bar-fill{height:5px;background:linear-gradient(90deg,#5b52e8,#7c6ff7);border-radius:3px;transition:width 0.4s ease;}
.dd-tabs{display:flex;gap:6px;margin-top:12px;}
.dd-tab{flex:1;height:3px;border-radius:2px;background:#e8e5df;}
.dd-tab.done{background:#5b52e8;}
.dd-tab.active{background:linear-gradient(90deg,#5b52e8,#7c6ff7);}
.dd-main{max-width:680px;margin:0 auto;padding:48px 24px 80px;}
.dd-sec-eyebrow{font-size:11px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:#5b52e8;margin-bottom:10px;}
.dd-sec-title{font-size:26px;font-weight:800;color:#1a1a2e;line-height:1.2;margin-bottom:8px;}
.dd-sec-desc{font-size:15px;color:#666;line-height:1.7;margin-bottom:36px;}
.dd-card{background:#fff;border:1px solid #e8e5df;border-radius:20px;padding:32px;margin-bottom:28px;box-shadow:0 2px 12px rgba(0,0,0,0.05);}
.dd-qnum{font-size:11px;font-weight:700;color:#aaa;letter-spacing:1px;text-transform:uppercase;margin-bottom:12px;}
.dd-qtext{font-size:19px;font-weight:700;color:#1a1a2e;line-height:1.4;margin-bottom:24px;}
.dd-qsub{font-size:14px;color:#888;margin-top:-16px;margin-bottom:20px;line-height:1.6;}
.dd-pgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:28px;max-width:360px;}
.dd-pcell{aspect-ratio:1;background:#f4f2ee;border:1.5px solid #e0ddd6;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:28px;}
.dd-pcell.miss{background:#eeecff;border:2px dashed #a09af5;color:#c0bdf5;font-size:22px;}
.dd-opts{display:grid;gap:10px;}
.dd-opts.g2{grid-template-columns:1fr 1fr;}
.dd-opts.g4{grid-template-columns:1fr 1fr;}
.dd-opt{background:#faf9f7;border:1.5px solid #e0ddd6;border-radius:12px;padding:14px 18px;cursor:pointer;display:flex;align-items:center;gap:12px;transition:all 0.15s;text-align:left;width:100%;}
.dd-opt:hover{background:#eeeaff;border-color:#a09af5;}
.dd-opt.sel{background:#eeeaff;border-color:#5b52e8;box-shadow:0 0 0 2px rgba(91,82,232,0.15);}
.dd-opt-sym{font-size:24px;width:44px;height:44px;background:#eeeaff;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.dd-opt-lbl{font-size:15px;font-weight:500;color:#1a1a2e;}
.dd-opt-sub{font-size:12px;color:#999;margin-top:2px;}
.dd-popts{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:4px;}
.dd-popt{aspect-ratio:1;background:#faf9f7;border:1.5px solid #e0ddd6;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:22px;cursor:pointer;transition:all 0.15s;position:relative;}
.dd-popt:hover{background:#eeeaff;border-color:#a09af5;}
.dd-popt.sel{background:#eeeaff;border-color:#5b52e8;box-shadow:0 0 0 2px rgba(91,82,232,0.15);}
.dd-popt-lbl{position:absolute;bottom:4px;right:6px;font-size:9px;font-weight:700;color:#bbb;}
.dd-scale{padding:8px 0;}
.dd-scale-opts{display:flex;gap:8px;}
.dd-scale-btn{flex:1;padding:14px 6px;background:#faf9f7;border:1.5px solid #e0ddd6;border-radius:10px;text-align:center;cursor:pointer;transition:all 0.15s;}
.dd-scale-btn:hover{background:#eeeaff;border-color:#a09af5;}
.dd-scale-btn.sel{background:#eeeaff;border-color:#5b52e8;box-shadow:0 0 0 2px rgba(91,82,232,0.15);}
.dd-scale-num{font-size:17px;font-weight:700;color:#5b52e8;}
.dd-scale-labels{display:flex;justify-content:space-between;margin-top:8px;}
.dd-scale-label{font-size:12px;color:#999;}
.dd-scenario{background:#f4f2ee;border-left:3px solid #5b52e8;border-radius:0 10px 10px 0;padding:16px 20px;margin-bottom:20px;font-size:15px;color:#555;line-height:1.6;font-style:italic;}
.dd-nav-btns{display:flex;justify-content:space-between;align-items:center;margin-top:32px;}
.dd-btn-back{background:transparent;border:1.5px solid #d0ccc4;color:#999;padding:12px 24px;border-radius:10px;font-size:15px;cursor:pointer;font-family:inherit;}
.dd-btn-next{background:linear-gradient(135deg,#5b52e8,#7c6ff7);color:#fff;padding:12px 32px;border-radius:10px;font-size:15px;font-weight:700;border:none;cursor:pointer;box-shadow:0 4px 16px rgba(91,82,232,0.3);font-family:inherit;}
.dd-btn-next:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(91,82,232,0.4);}
.dd-btn-next:disabled{opacity:0.35;cursor:not-allowed;transform:none;}
.dd-divider{border:none;border-top:1px solid #e8e5df;margin:40px 0;}
.dd-seq{display:flex;gap:12px;align-items:center;margin-bottom:24px;flex-wrap:wrap;}
.dd-seq-box{background:#eeeaff;border:1.5px solid #c4bff7;border-radius:10px;padding:14px 20px;font-size:22px;font-weight:800;color:#5b52e8;}
.dd-seq-q{background:#f4f2ee;border:2px dashed #c4bff7;border-radius:10px;padding:14px 20px;font-size:22px;font-weight:800;color:#ccc;}
.dd-sym-key{display:flex;gap:20px;margin-bottom:20px;flex-wrap:wrap;}
.dd-sym-box{background:#f4f2ee;border:1.5px solid #e0ddd6;border-radius:10px;padding:12px 18px;display:flex;align-items:center;gap:10px;}
.dd-sym-expr{background:#eeeaff;border:1.5px solid #c4bff7;border-radius:12px;padding:16px 20px;font-size:22px;font-weight:800;color:#5b52e8;margin-bottom:20px;letter-spacing:4px;}
.dd-tri-svg{background:#f4f2ee;border:1.5px solid #e0ddd6;border-radius:14px;padding:28px;margin-bottom:20px;display:flex;align-items:center;justify-content:center;}
/* Intro */
.dd-intro{text-align:center;padding:60px 24px;max-width:560px;margin:0 auto;}
.dd-intro-icon{font-size:56px;margin-bottom:24px;}
.dd-intro-title{font-size:32px;font-weight:800;color:#1a1a2e;margin-bottom:14px;font-family:'Fraunces',Georgia,serif;}
.dd-intro-body{font-size:16px;color:#666;line-height:1.8;margin-bottom:32px;}
.dd-intro-stats{display:flex;justify-content:center;gap:32px;margin-bottom:36px;}
.dd-stat-num{font-size:28px;font-weight:800;color:#5b52e8;}
.dd-stat-lbl{font-size:13px;color:#999;margin-top:2px;}
.dd-btn-start{background:linear-gradient(135deg,#5b52e8,#7c6ff7);color:#fff;padding:16px 40px;border-radius:14px;font-size:16px;font-weight:700;border:none;cursor:pointer;box-shadow:0 6px 24px rgba(91,82,232,0.35);font-family:inherit;}
/* Processing */
.dd-processing{text-align:center;padding:80px 24px;max-width:480px;margin:0 auto;}
.dd-proc-icon{font-size:52px;margin-bottom:24px;animation:dd-pulse 1.5s ease-in-out infinite;}
@keyframes dd-pulse{0%,100%{transform:scale(1);}50%{transform:scale(1.08);}}
.dd-proc-title{font-size:22px;font-weight:800;color:#1a1a2e;margin-bottom:8px;}
.dd-proc-step{font-size:14px;color:#5b52e8;margin-bottom:32px;min-height:20px;}
.dd-proc-bar-bg{height:6px;background:#e8e5df;border-radius:3px;overflow:hidden;margin-bottom:16px;}
.dd-proc-bar-fill{height:6px;background:linear-gradient(90deg,#5b52e8,#7c6ff7);border-radius:3px;transition:width 0.8s ease;}
.dd-proc-pct{font-size:12px;color:#aaa;}
/* Paywall */
.dd-paywall{max-width:560px;margin:0 auto;padding:48px 24px 80px;}
.dd-pw-badge{display:inline-flex;align-items:center;gap:6px;background:#eeeaff;border:1px solid #c4bff7;border-radius:999px;padding:6px 14px;font-size:12px;font-weight:700;color:#5b52e8;letter-spacing:0.5px;margin-bottom:20px;}
.dd-pw-title{font-size:30px;font-weight:800;color:#1a1a2e;line-height:1.2;margin-bottom:8px;font-family:'Fraunces',Georgia,serif;}
.dd-pw-sub{font-size:15px;color:#666;line-height:1.7;margin-bottom:28px;}
.dd-pw-card{background:#fff;border:1px solid #e8e5df;border-radius:20px;padding:28px;margin-bottom:24px;box-shadow:0 2px 16px rgba(0,0,0,0.06);}
.dd-pw-price-row{display:flex;align-items:baseline;gap:8px;margin-bottom:20px;}
.dd-pw-price{font-size:42px;font-weight:800;color:#1a1a2e;}
.dd-pw-price-sub{font-size:14px;color:#999;}
.dd-pw-items{display:grid;gap:12px;margin-bottom:24px;}
.dd-pw-item{display:flex;align-items:flex-start;gap:12px;}
.dd-pw-item-icon{font-size:18px;flex-shrink:0;margin-top:1px;}
.dd-pw-item-text strong{display:block;font-size:14px;font-weight:700;color:#1a1a2e;margin-bottom:2px;}
.dd-pw-item-text span{font-size:13px;color:#777;}
.dd-btn-buy{width:100%;background:linear-gradient(135deg,#5b52e8,#7c6ff7);color:#fff;padding:16px 24px;border-radius:14px;font-size:16px;font-weight:800;border:none;cursor:pointer;box-shadow:0 6px 24px rgba(91,82,232,0.35);font-family:inherit;transition:all 0.2s;}
.dd-btn-buy:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(91,82,232,0.45);}
.dd-btn-buy:disabled{opacity:0.5;cursor:not-allowed;transform:none;}
.dd-pw-trust{display:flex;justify-content:center;gap:20px;margin-top:16px;flex-wrap:wrap;}
.dd-pw-trust-item{font-size:12px;color:#aaa;display:flex;align-items:center;gap:4px;}
/* Success */
.dd-success{text-align:center;padding:80px 24px;max-width:480px;margin:0 auto;}
.dd-success-icon{font-size:64px;margin-bottom:24px;}
.dd-success-title{font-size:28px;font-weight:800;color:#1a1a2e;margin-bottom:12px;font-family:'Fraunces',Georgia,serif;}
.dd-success-body{font-size:15px;color:#666;line-height:1.7;margin-bottom:32px;}
.dd-success-card{background:#eeeaff;border:1px solid #c4bff7;border-radius:16px;padding:24px;margin-bottom:28px;text-align:left;}
.dd-success-card-title{font-size:11px;font-weight:800;color:#5b52e8;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:12px;}
.dd-success-items{display:grid;gap:10px;}
.dd-success-item{display:flex;align-items:center;gap:10px;font-size:14px;color:#444;}
.dd-success-item-icon{font-size:16px;}
@media(max-width:600px){
  .dd-nav{padding:14px 16px;}
  .dd-progress{padding:12px 16px;}
  .dd-main{padding:32px 16px 60px;}
  .dd-paywall{padding:32px 16px 60px;}
  .dd-opts.g2,.dd-opts.g4{grid-template-columns:1fr;}
  .dd-popts{grid-template-columns:repeat(2,1fr);}
  .dd-intro-stats{gap:20px;}
}
`;

// ─── Component ───────────────────────────────────────────────────────────────
function DeepDivePage(){
  const[,navigate]=k();
  const search=P();
  const params=new URLSearchParams(search);
  const quizToken=params.get("token")||null;
  const isSuccessRoute=typeof window!=="undefined"&&window.location.pathname==="/deep-dive/success";
  const hasStripeSession=params.get("session_id")!=null;

  // State
  const[screen,setScreen]=b.useState(isSuccessRoute||hasStripeSession?"success":"intro"); // intro | quiz | processing | paywall | success
  const[qIndex,setQIndex]=b.useState(0);
  const[answers,setAnswers]=b.useState({});
  const[procStep,setProcStep]=b.useState(0);
  const[procPct,setProcPct]=b.useState(0);
  const[loading,setLoading]=b.useState(false);
  const[email,setEmail]=b.useState("");

  // Load email from session storage (from free quiz)
  b.useEffect(()=>{
    try{
      const stored=sessionStorage.getItem("myneurotest_report");
      if(stored){const d=JSON.parse(stored);if(d.email)setEmail(d.email);}
    }catch{}
  },[]);

  // Processing animation
  b.useEffect(()=>{
    if(screen!=="processing")return;
    let step=0;let pct=0;
    const iv=setInterval(()=>{
      step=(step+1)%PROCESSING_STEPS.length;
      pct=Math.min(pct+Math.floor(100/PROCESSING_STEPS.length),95);
      setProcStep(step);setProcPct(pct);
    },900);
    const t=setTimeout(()=>{
      clearInterval(iv);setProcPct(100);
      setTimeout(()=>setScreen("paywall"),600);
    },PROCESSING_STEPS.length*900+400);
    return()=>{clearInterval(iv);clearTimeout(t);};
  },[screen]);

  const currentQ=ALL_QUESTIONS[qIndex];
  const currentSection=SECTIONS.find(s=>s.id===currentQ?.sectionId);
  const sectionIndex=SECTIONS.findIndex(s=>s.id===currentQ?.sectionId);
  const progress=TOTAL>0?(qIndex/TOTAL)*100:0;

  const isAnswered=answers[currentQ?.id]!==undefined;

  function selectAnswer(qId,val){
    setAnswers(prev=>({...prev,[qId]:val}));
  }

  function handleNext(){
    if(qIndex<TOTAL-1){setQIndex(i=>i+1);}
    else{setScreen("processing");}
  }

  function handleBack(){
    if(qIndex>0)setQIndex(i=>i-1);
    else setScreen("intro");
  }

  async function handleBuy(){
    if(loading)return;
    setLoading(true);
    try{
      const result=await E("deepDive.createCheckout",{
        email:email||"guest@myneurotest.com",
        quizToken:quizToken||undefined,
        origin:window.location.origin
      },"mutation");
      if(result?.url){window.location.href=result.url;return;}
    }catch(err){
      alert("Something went wrong. Please try again.");
    }finally{setLoading(false);}
  }

  // ── Render helpers ──────────────────────────────────────────────────────────
  function renderQuestion(q,idx){
    const ans=answers[q.id];
    const qNum=idx+1;

    if(q.type==="pattern-grid"||q.type==="moon-matrix"){
      return e.jsxDEV(b.Fragment,{children:[
        e.jsxDEV("div",{className:"dd-pgrid",children:q.grid.map((cell,i)=>
          e.jsxDEV("div",{className:"dd-pcell"+(cell==="?"?" miss":""),children:cell==="?"?"?":cell},i,false)
        )},void 0,false),
        e.jsxDEV("div",{className:"dd-popts",children:q.options.map(opt=>
          e.jsxDEV("div",{
            className:"dd-popt"+(ans===opt.val?" sel":""),
            onClick:()=>selectAnswer(q.id,opt.val),
            children:[opt.display,e.jsxDEV("span",{className:"dd-popt-lbl",children:opt.label},void 0,false)]
          },opt.val,false)
        )},void 0,false)
      ]},void 0,true);
    }

    if(q.type==="sequence"){
      return e.jsxDEV(b.Fragment,{children:[
        e.jsxDEV("div",{className:"dd-seq",children:[
          ...q.sequence.slice(0,-1).map((n,i)=>e.jsxDEV("div",{className:"dd-seq-box",children:n},i,false)),
          e.jsxDEV("div",{className:"dd-seq-q",children:"?"},void 0,false)
        ]},void 0,true),
        e.jsxDEV("div",{className:"dd-opts g4",children:q.options.map(opt=>
          e.jsxDEV("button",{
            className:"dd-opt"+(ans===opt.val?" sel":""),
            onClick:()=>selectAnswer(q.id,opt.val),
            style:{justifyContent:"center"},
            children:e.jsxDEV("div",{className:"dd-opt-lbl",style:{fontSize:"18px",fontWeight:"800"},children:opt.display},void 0,false)
          },opt.val,false)
        )},void 0,false)
      ]},void 0,true);
    }

    if(q.type==="odd-one-out"){
      return e.jsxDEV("div",{className:"dd-opts g2",children:q.options.map(opt=>
        e.jsxDEV("button",{
          className:"dd-opt"+(ans===opt.val?" sel":""),
          onClick:()=>selectAnswer(q.id,opt.val),
          children:[
            e.jsxDEV("div",{className:"dd-opt-sym",children:opt.symbol},void 0,false),
            e.jsxDEV("div",{children:[
              e.jsxDEV("div",{className:"dd-opt-lbl",children:opt.label},void 0,false),
              e.jsxDEV("div",{className:"dd-opt-sub",children:opt.sub2},void 0,false)
            ]},void 0,true)
          ]
        },opt.val,false)
      )},void 0,false);
    }

    if(q.type==="rotation"||q.type==="mirror"){
      return e.jsxDEV(b.Fragment,{children:[
        e.jsxDEV("div",{style:{marginBottom:"20px",display:"flex",alignItems:"center",gap:"16px"},children:[
          e.jsxDEV("div",{style:{background:"#f4f2ee",border:"1.5px solid #e0ddd6",borderRadius:"12px",padding:"20px 28px",fontSize:"42px",lineHeight:"1"},children:q.source},void 0,false),
          e.jsxDEV("div",{style:{color:"#999",fontSize:"13px"},children:q.type==="rotation"?"Rotate 90° →":"Mirror →"},void 0,false)
        ]},void 0,true),
        e.jsxDEV("div",{className:"dd-popts",children:q.options.map(opt=>
          e.jsxDEV("div",{
            className:"dd-popt"+(ans===opt.val?" sel":""),
            onClick:()=>selectAnswer(q.id,opt.val),
            style:{fontSize:"32px"},
            children:[opt.display,e.jsxDEV("span",{className:"dd-popt-lbl",children:opt.label},void 0,false)]
          },opt.val,false)
        )},void 0,false)
      ]},void 0,true);
    }

    if(q.type==="size-sequence"){
      const sizes=[28,40,54,68];
      return e.jsxDEV(b.Fragment,{children:[
        e.jsxDEV("div",{style:{display:"flex",gap:"14px",alignItems:"center",marginBottom:"24px",flexWrap:"wrap"},children:[
          ...sizes.map((sz,i)=>e.jsxDEV("div",{style:{background:"#eeeaff",border:"1.5px solid #c4bff7",borderRadius:"8px",padding:"8px",width:sz+"px",height:sz+"px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:(sz-18)+"px"},children:"⬛"},i,false)),
          e.jsxDEV("div",{style:{background:"#f4f2ee",border:"2px dashed #c4bff7",borderRadius:"8px",padding:"8px",width:"82px",height:"82px",display:"flex",alignItems:"center",justifyContent:"center",color:"#ccc",fontSize:"14px"},children:"?"},void 0,false)
        ]},void 0,true),
        e.jsxDEV("div",{className:"dd-opts g4",children:q.options.map(opt=>
          e.jsxDEV("button",{
            className:"dd-opt"+(ans===opt.val?" sel":""),
            onClick:()=>selectAnswer(q.id,opt.val),
            style:{justifyContent:"center"},
            children:e.jsxDEV("div",{style:{fontSize:opt.size+"px"},children:"⬛"},void 0,false)
          },opt.val,false)
        )},void 0,false)
      ]},void 0,true);
    }

    if(q.type==="triangles"){
      return e.jsxDEV(b.Fragment,{children:[
        e.jsxDEV("div",{className:"dd-tri-svg",children:
          e.jsxDEV("svg",{width:"160",height:"140",viewBox:"0 0 160 140",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[
            e.jsxDEV("polygon",{points:"80,10 10,130 150,130",stroke:"#5b52e8",strokeWidth:"2.5",fill:"rgba(91,82,232,0.08)"},void 0,false),
            e.jsxDEV("line",{x1:"80",y1:"10",x2:"80",y2:"130",stroke:"#5b52e8",strokeWidth:"1.5",opacity:"0.6"},void 0,false),
            e.jsxDEV("line",{x1:"10",y1:"130",x2:"115",y2:"70",stroke:"#5b52e8",strokeWidth:"1.5",opacity:"0.6"},void 0,false),
            e.jsxDEV("line",{x1:"150",y1:"130",x2:"45",y2:"70",stroke:"#5b52e8",strokeWidth:"1.5",opacity:"0.6"},void 0,false)
          ]},void 0,true)
        },void 0,false),
        e.jsxDEV("div",{className:"dd-opts g4",children:q.options.map(opt=>
          e.jsxDEV("button",{
            className:"dd-opt"+(ans===opt.val?" sel":""),
            onClick:()=>selectAnswer(q.id,opt.val),
            style:{justifyContent:"center"},
            children:e.jsxDEV("div",{className:"dd-opt-lbl",style:{fontSize:"20px",fontWeight:"800"},children:opt.display},void 0,false)
          },opt.val,false)
        )},void 0,false)
      ]},void 0,true);
    }

    if(q.type==="symbol-sub"){
      return e.jsxDEV(b.Fragment,{children:[
        e.jsxDEV("div",{className:"dd-sym-key",children:q.key.map((k2,i)=>
          e.jsxDEV("div",{className:"dd-sym-box",children:[
            e.jsxDEV("span",{style:{fontSize:"22px"},children:k2.sym},void 0,false),
            e.jsxDEV("span",{style:{color:"#666",fontSize:"13px"},children:"="},void 0,false),
            e.jsxDEV("span",{style:{fontSize:"18px",fontWeight:"800",color:"#5b52e8"},children:k2.val},void 0,false)
          ]},i,true)
        )},void 0,false),
        e.jsxDEV("div",{className:"dd-sym-expr",children:q.expr},void 0,false),
        e.jsxDEV("div",{className:"dd-opts g4",children:q.options.map(opt=>
          e.jsxDEV("button",{
            className:"dd-opt"+(ans===opt.val?" sel":""),
            onClick:()=>selectAnswer(q.id,opt.val),
            style:{justifyContent:"center"},
            children:e.jsxDEV("div",{className:"dd-opt-lbl",style:{fontSize:"20px",fontWeight:"800"},children:opt.display},void 0,false)
          },opt.val,false)
        )},void 0,false)
      ]},void 0,true);
    }

    if(q.type==="scale"){
      return e.jsxDEV("div",{className:"dd-scale",children:[
        e.jsxDEV("div",{className:"dd-scale-opts",children:[1,2,3,4,5].map(n=>
          e.jsxDEV("div",{
            className:"dd-scale-btn"+(ans===n?" sel":""),
            onClick:()=>selectAnswer(q.id,n),
            children:e.jsxDEV("div",{className:"dd-scale-num",children:n},void 0,false)
          },n,false)
        )},void 0,false),
        e.jsxDEV("div",{className:"dd-scale-labels",children:[
          e.jsxDEV("span",{className:"dd-scale-label",children:q.scaleMin},void 0,false),
          e.jsxDEV("span",{className:"dd-scale-label",children:q.scaleMax},void 0,false)
        ]},void 0,true)
      ]},void 0,true);
    }

    if(q.type==="scenario"){
      return e.jsxDEV(b.Fragment,{children:[
        e.jsxDEV("div",{className:"dd-scenario",children:q.scenario},void 0,false),
        e.jsxDEV("div",{className:"dd-opts",children:q.options.map(opt=>
          e.jsxDEV("button",{
            className:"dd-opt"+(ans===opt.val?" sel":""),
            onClick:()=>selectAnswer(q.id,opt.val),
            children:[
              e.jsxDEV("div",{className:"dd-opt-sym",children:opt.symbol},void 0,false),
              e.jsxDEV("div",{className:"dd-opt-lbl",children:opt.label},void 0,false)
            ]
          },opt.val,false)
        )},void 0,false)
      ]},void 0,true);
    }

    // Default: choice
    const gridClass=q.options&&q.options.length===4?"g2":"";
    return e.jsxDEV("div",{className:"dd-opts "+gridClass,children:q.options.map(opt=>
      e.jsxDEV("button",{
        className:"dd-opt"+(ans===opt.val?" sel":""),
        onClick:()=>selectAnswer(q.id,opt.val),
        children:[
          opt.symbol&&e.jsxDEV("div",{className:"dd-opt-sym",children:opt.symbol},void 0,false),
          e.jsxDEV("div",{className:"dd-opt-lbl",children:opt.label},void 0,false)
        ]
      },opt.val,false)
    )},void 0,false);
  }

  // ── Screens ─────────────────────────────────────────────────────────────────
  if(screen==="intro"){
    return e.jsxDEV("div",{className:"dd-wrap",children:[
      e.jsxDEV("style",{children:CSS},void 0,false),
      e.jsxDEV("nav",{className:"dd-nav",children:[
        e.jsxDEV("a",{href:"/",className:"dd-nav-logo",children:[
          e.jsxDEV("span",{className:"dd-nav-badge",children:"N"},void 0,false),
          "MyNeuroTest"
        ]},void 0,true),
        e.jsxDEV("span",{className:"dd-nav-section",children:"Deep Dive Assessment"},void 0,false)
      ]},void 0,true),
      e.jsxDEV("div",{className:"dd-main",children:
        e.jsxDEV("div",{className:"dd-intro",children:[
          e.jsxDEV("div",{className:"dd-intro-icon",children:"🧠"},void 0,false),
          e.jsxDEV("h1",{className:"dd-intro-title",children:"IQ Score & Cognitive Deep Dive"},void 0,false),
          e.jsxDEV("p",{className:"dd-intro-body",children:"A 28-question assessment that measures your fluid reasoning, working memory, processing speed, and 9 other cognitive factors — then delivers your estimated IQ range and a personalized cognitive profile."},void 0,false),
          e.jsxDEV("div",{className:"dd-intro-stats",children:[
            e.jsxDEV("div",{style:{textAlign:"center"},children:[
              e.jsxDEV("div",{className:"dd-stat-num",children:"28"},void 0,false),
              e.jsxDEV("div",{className:"dd-stat-lbl",children:"Questions"},void 0,false)
            ]},void 0,true),
            e.jsxDEV("div",{style:{textAlign:"center"},children:[
              e.jsxDEV("div",{className:"dd-stat-num",children:"12"},void 0,false),
              e.jsxDEV("div",{className:"dd-stat-lbl",children:"Cognitive Factors"},void 0,false)
            ]},void 0,true),
            e.jsxDEV("div",{style:{textAlign:"center"},children:[
              e.jsxDEV("div",{className:"dd-stat-num",children:"~8 min"},void 0,false),
              e.jsxDEV("div",{className:"dd-stat-lbl",children:"To complete"},void 0,false)
            ]},void 0,true)
          ]},void 0,true),
          e.jsxDEV("button",{className:"dd-btn-start",onClick:()=>setScreen("quiz"),children:"Start the Assessment →"},void 0,false)
        ]},void 0,true)
      },void 0,false)
    ]},void 0,true);
  }

  if(screen==="processing"){
    return e.jsxDEV("div",{className:"dd-wrap",children:[
      e.jsxDEV("style",{children:CSS},void 0,false),
      e.jsxDEV("nav",{className:"dd-nav",children:[
        e.jsxDEV("a",{href:"/",className:"dd-nav-logo",children:[
          e.jsxDEV("span",{className:"dd-nav-badge",children:"N"},void 0,false),
          "MyNeuroTest"
        ]},void 0,true),
        e.jsxDEV("span",{className:"dd-nav-section",children:"Deep Dive Assessment"},void 0,false)
      ]},void 0,true),
      e.jsxDEV("div",{className:"dd-main",children:
        e.jsxDEV("div",{className:"dd-processing",children:[
          e.jsxDEV("div",{className:"dd-proc-icon",children:"🧠"},void 0,false),
          e.jsxDEV("div",{className:"dd-proc-title",children:"Analyzing your results..."},void 0,false),
          e.jsxDEV("div",{className:"dd-proc-step",children:PROCESSING_STEPS[procStep]},void 0,false),
          e.jsxDEV("div",{className:"dd-proc-bar-bg",children:
            e.jsxDEV("div",{className:"dd-proc-bar-fill",style:{width:procPct+"%"}},void 0,false)
          },void 0,false),
          e.jsxDEV("div",{className:"dd-proc-pct",children:procPct+"%"},void 0,false)
        ]},void 0,true)
      },void 0,false)
    ]},void 0,true);
  }

  if(screen==="paywall"){
    return e.jsxDEV("div",{className:"dd-wrap",children:[
      e.jsxDEV("style",{children:CSS},void 0,false),
      e.jsxDEV("nav",{className:"dd-nav",children:[
        e.jsxDEV("a",{href:"/",className:"dd-nav-logo",children:[
          e.jsxDEV("span",{className:"dd-nav-badge",children:"N"},void 0,false),
          "MyNeuroTest"
        ]},void 0,true),
        e.jsxDEV("span",{className:"dd-nav-section",children:"Deep Dive Assessment"},void 0,false)
      ]},void 0,true),
      e.jsxDEV("div",{className:"dd-paywall",children:[
        e.jsxDEV("div",{className:"dd-pw-badge",children:"✦ Assessment Complete"},void 0,false),
        e.jsxDEV("h1",{className:"dd-pw-title",children:"What is your actual IQ?"},void 0,false),
        e.jsxDEV("p",{className:"dd-pw-sub",children:"Your cognitive battery results are ready. Get your estimated IQ range, 12-factor cognitive profile, and a personalized report explaining exactly how your brain works."},void 0,false),
        e.jsxDEV("div",{className:"dd-pw-card",children:[
          e.jsxDEV("div",{className:"dd-pw-price-row",children:[
            e.jsxDEV("div",{className:"dd-pw-price",children:"$9.99"},void 0,false),
            e.jsxDEV("div",{className:"dd-pw-price-sub",children:"one-time · delivered to your email"},void 0,false)
          ]},void 0,true),
          e.jsxDEV("div",{className:"dd-pw-items",children:[
            {icon:"🎯",title:"Estimated IQ Range",desc:"Your cognitive ability score contextualized against population norms"},
            {icon:"🧩",title:"12-Factor Cognitive Profile",desc:"Fluid reasoning, working memory, processing speed, and more"},
            {icon:"🔬",title:"Strengths & Blind Spots",desc:"Where your profile excels and where to compensate"},
            {icon:"🪞",title:"Self-Perception Analysis",desc:"How your self-assessment compares to your actual battery results"},
            {icon:"📋",title:"Personalized Action Plan",desc:"Strategies tailored to your exact cognitive fingerprint"}
          ].map((item,i)=>
            e.jsxDEV("div",{className:"dd-pw-item",children:[
              e.jsxDEV("div",{className:"dd-pw-item-icon",children:item.icon},void 0,false),
              e.jsxDEV("div",{className:"dd-pw-item-text",children:[
                e.jsxDEV("strong",{children:item.title},void 0,false),
                e.jsxDEV("span",{children:item.desc},void 0,false)
              ]},void 0,true)
            ]},i,true)
          )},void 0,false),
          e.jsxDEV("button",{className:"dd-btn-buy",onClick:handleBuy,disabled:loading,children:loading?"Processing...":"Get My IQ Score & Report →"},void 0,false),
          e.jsxDEV("div",{className:"dd-pw-trust",children:[
            e.jsxDEV("span",{className:"dd-pw-trust-item",children:"🔒 Secure checkout"},void 0,false),
            e.jsxDEV("span",{className:"dd-pw-trust-item",children:"📧 Delivered by email"},void 0,false),
            e.jsxDEV("span",{className:"dd-pw-trust-item",children:"⚡ Within 24 hours"},void 0,false)
          ]},void 0,true)
        ]},void 0,true)
      ]},void 0,true)
    ]},void 0,true);
  }

  if(screen==="success"){
    return e.jsxDEV("div",{className:"dd-wrap",children:[
      e.jsxDEV("style",{children:CSS},void 0,false),
      e.jsxDEV("nav",{className:"dd-nav",children:[
        e.jsxDEV("a",{href:"/",className:"dd-nav-logo",children:[
          e.jsxDEV("span",{className:"dd-nav-badge",children:"N"},void 0,false),
          "MyNeuroTest"
        ]},void 0,true)
      ]},void 0,false),
      e.jsxDEV("div",{className:"dd-main",children:
        e.jsxDEV("div",{className:"dd-success",children:[
          e.jsxDEV("div",{className:"dd-success-icon",children:"✅"},void 0,false),
          e.jsxDEV("h1",{className:"dd-success-title",children:"Your Deep Dive report is being compiled."},void 0,false),
          e.jsxDEV("p",{className:"dd-success-body",children:["You'll receive your IQ Score & Cognitive Deep Dive report at ",e.jsxDEV("strong",{style:{color:"#5b52e8"},children:email||"your email"},void 0,false)," within 24 hours."]},void 0,true),
          e.jsxDEV("div",{className:"dd-success-card",children:[
            e.jsxDEV("div",{className:"dd-success-card-title",children:"What's coming in your report"},void 0,false),
            e.jsxDEV("div",{className:"dd-success-items",children:[
              "🎯 Estimated IQ range",
              "🧩 12-factor cognitive profile",
              "🔬 Strengths & blind spots analysis",
              "🪞 Self-perception vs. actual results",
              "📋 Personalized action plan"
            ].map((item,i)=>
              e.jsxDEV("div",{className:"dd-success-item",children:[
                e.jsxDEV("span",{className:"dd-success-item-icon",children:item.slice(0,2)},void 0,false),
                e.jsxDEV("span",{children:item.slice(2)},void 0,false)
              ]},i,true)
            )},void 0,false)
          ]},void 0,true),
          e.jsxDEV("a",{href:"/",style:{color:"#888",fontSize:"13px",textDecoration:"none"},children:"← Back to MyNeuroTest"},void 0,false)
        ]},void 0,true)
      },void 0,false)
    ]},void 0,true);
  }

  // ── Quiz screen ─────────────────────────────────────────────────────────────
  const sectionLabel=currentSection?`Section ${sectionIndex+1} of ${SECTIONS.length} — ${currentSection.title}`:"";
  const prevSection=qIndex>0?SECTIONS.find(s=>s.id===ALL_QUESTIONS[qIndex-1].sectionId):null;
  const sectionChanged=prevSection&&prevSection.id!==currentSection?.id;

  return e.jsxDEV("div",{className:"dd-wrap",children:[
    e.jsxDEV("style",{children:CSS},void 0,false),
    e.jsxDEV("nav",{className:"dd-nav",children:[
      e.jsxDEV("a",{href:"/",className:"dd-nav-logo",children:[
        e.jsxDEV("span",{className:"dd-nav-badge",children:"N"},void 0,false),
        "MyNeuroTest"
      ]},void 0,true),
      e.jsxDEV("span",{className:"dd-nav-section",children:"Deep Dive Assessment"},void 0,false)
    ]},void 0,true),
    e.jsxDEV("div",{className:"dd-progress",children:[
      e.jsxDEV("div",{className:"dd-progress-meta",children:[
        e.jsxDEV("span",{className:"dd-progress-label",children:sectionLabel},void 0,false),
        e.jsxDEV("span",{className:"dd-progress-count",children:`Q${qIndex+1} of ${TOTAL}`},void 0,false)
      ]},void 0,true),
      e.jsxDEV("div",{className:"dd-bar-bg",children:
        e.jsxDEV("div",{className:"dd-bar-fill",style:{width:progress+"%"}},void 0,false)
      },void 0,false),
      e.jsxDEV("div",{className:"dd-tabs",children:SECTIONS.map((s,i)=>{
        const done=i<sectionIndex;
        const active=i===sectionIndex;
        return e.jsxDEV("div",{className:"dd-tab"+(done?" done":active?" active":""),title:s.title},i,false);
      })},void 0,false)
    ]},void 0,true),
    e.jsxDEV("div",{className:"dd-main",children:[
      sectionChanged&&e.jsxDEV(b.Fragment,{children:[
        e.jsxDEV("div",{className:"dd-sec-eyebrow",children:currentSection?.eyebrow},void 0,false),
        e.jsxDEV("div",{className:"dd-sec-title",children:currentSection?.title},void 0,false),
        e.jsxDEV("div",{className:"dd-sec-desc",children:currentSection?.desc},void 0,false)
      ]},void 0,true),
      qIndex===0&&e.jsxDEV(b.Fragment,{children:[
        e.jsxDEV("div",{className:"dd-sec-eyebrow",children:currentSection?.eyebrow},void 0,false),
        e.jsxDEV("div",{className:"dd-sec-title",children:currentSection?.title},void 0,false),
        e.jsxDEV("div",{className:"dd-sec-desc",children:currentSection?.desc},void 0,false)
      ]},void 0,true),
      e.jsxDEV("div",{className:"dd-card",children:[
        e.jsxDEV("div",{className:"dd-qnum",children:`Question ${qIndex+1} of ${TOTAL}`},void 0,false),
        e.jsxDEV("div",{className:"dd-qtext",children:currentQ.text},void 0,false),
        currentQ.sub&&e.jsxDEV("div",{className:"dd-qsub",children:currentQ.sub},void 0,false),
        renderQuestion(currentQ,qIndex)
      ]},void 0,true),
      e.jsxDEV("div",{className:"dd-nav-btns",children:[
        e.jsxDEV("button",{className:"dd-btn-back",onClick:handleBack,children:"← Back"},void 0,false),
        e.jsxDEV("button",{
          className:"dd-btn-next",
          onClick:handleNext,
          disabled:!isAnswered,
          children:qIndex===TOTAL-1?"See My Results →":"Next →"
        },void 0,false)
      ]},void 0,true)
    ]},void 0,true)
  ]},void 0,true);
}

export{DeepDivePage as default};
