// paragraph
let sentence: any = `Nearly ten years had passed since the Dursleys had woken up to find their
nephew on the front step, but Privet Drive had hardly changed at all. The
sun rose on the same tidy front gardens and lit up the brass number four on
the Dursleys&#39; front door; it crept into their living room, which was almost
exactly the same as it had been on the night when Mr. Dursley had seen that
fateful news report about the owls. Only the photographs on the mantelpiece
really showed how much time had passed. Ten years ago, there had been lots
of pictures of what looked like a large pink beach ball wearing different-
colored bonnets - but Dudley Dursley was no longer a baby, and now the
photographs showed a large blond boy riding his first bicycle, on a
carousel at the fair, playing a computer game with his father, being hugged
and kissed by his mother. The room held no sign at all that another boy
lived in the house, too.
Yet Harry Potter was still there, asleep at the moment, but not for long.
His Aunt Petunia was awake and it was her shrill voice that made the first
noise of the day.

&quot;Up! Get up! Now!&quot;
Harry woke with a start. His aunt rapped on the door again.
&quot;Up!&quot; she screeched. Harry heard her walking toward the kitchen and then
the sound of the frying pan being put on the stove. He rolled onto his back
and tried to remember the dream he had been having. It had been a good one.
There had been a flying motorcycle in it. He had a funny feeling he&#39;d had
the same dream before.
His aunt was back outside the door.
&quot;Are you up yet?&quot; she demanded.
&quot;Nearly,&quot; said Harry.
&quot;Well, get a move on, I want you to look after the bacon. And don&#39;t you
dare let it burn, I want everything perfect on Duddy&#39;s birthday.&quot;
Harry groaned.
&quot;What did you say?&quot; his aunt snapped through the door.
&quot;Nothing, nothing . . .&quot;
Dudley&#39;s birthday - how could he have forgotten? Harry got slowly out of
bed and started looking for socks. He found a pair under his bed and, after
pulling a spider off one of them, put them on. Harry was used to spiders,
because the cupboard under the stairs was full of them, and that was where
he slept.`;
//split the paragraph

let spaces = 0;
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] === ' ') {
    spaces = spaces + 1;
  }
}
console.log(`space ${spaces}`);

let words = sentence.split(' ');
let wordMap: any = {};
//count the each word how many types repated
for (let i = 0; i < words.length; i++) {
  let currentWordCount = wordMap[words[i]];
  let count = currentWordCount ? currentWordCount : 0;
  wordMap[words[i]] = count + 1;
}

console.log(wordMap);
