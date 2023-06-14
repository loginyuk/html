const el = (sel, par) => (par || document).querySelector(sel);
const elNew = (tag, prop) => Object.assign(document.createElement(tag), prop);

const elText  = el("#text");
const elVoice = el("#voice");
const elSpeak = el("#speak");
const synth = speechSynthesis;

const voiceSpeech = () => elVoice.append(...synth.getVoices().map(v => elNew("option", {textContent: v.name, value: v.lang})));
synth.addEventListener('voiceschanged', () => {
    const voices = synth.getVoices();
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  });

const textToSpeech = (text) => {
  synth.cancel(); // cancel ongoing speech
  synth.speak(Object.assign(new SpeechSynthesisUtterance, {
    text,
    lang: elVoice.value
  }));
}

elSpeak.addEventListener("click", () => textToSpeech(elText.value));