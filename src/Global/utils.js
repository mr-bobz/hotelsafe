//generate beep sound
let AudioContext = window.AudioContext || window.webkitAudioContext;
let context;
if(AudioContext){
  context = new AudioContext();
} 
export const beep = (freq = 520, duration = 200, vol = 100) => {
  if(context){
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.connect(gain);
    oscillator.frequency.value = freq;
    oscillator.type = "square";
    gain.connect(context.destination);
    gain.gain.value = vol * 0.01;
    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + duration * 0.001);
  }
}