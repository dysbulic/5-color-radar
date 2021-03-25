import {
  Text, Link as ChakraLink, UnorderedList, ListItem,
} from '@chakra-ui/react'

const Link = ({ children, ...args }) => (
  <ChakraLink {...args} textDecoration='underline'>
    {children}
  </ChakraLink>
)

export const masks = {
  0b00000: 'Colorless',
  0b10000: 'White',
  0b01000: 'Blue',
  0b00100: 'Black',
  0b00010: 'Red',
  0b00001: 'Green',
  0b11000: 'The Azorius Senate',    // WU
  0b01100: 'The House Dimir',       // UB
  0b00101: 'The Golgari Swarm',     // BG
  0b00011: 'The Gruul Clans',       // RG
  0b10001: 'The Selesnya Conclave', // WG
  0b01001: 'The Simic Combine',     // UG
  0b10100: 'The Orzhov Syndicate',  // WB
  0b01010: 'The Izzet League',      // UR
  0b00110: 'The Cult of Rakdos',    // BR
  0b10010: 'The Boros Legion',      // WR
  0b11001: 'The Bant Shard',        // WUG
  0b11100: 'The Esper Shard',       // WUB
  0b01110: 'The Grixis Shard',      // UBR
  0b00111: 'The Jund Shard',        // BRG
  0b10011: 'The Naya Shard',        // WRG
  0b11010: 'The Jeskai Way',        // WUR
  0b01101: 'The Sultai Brood',      // UBG
  0b10110: 'The Mardu Horde',       // WBR
  0b01011: 'The Temur Frontier',    // URG
  0b10101: 'The Abzan Houses',      // WBG
  0b11110: 'Artifice',   // WUBR
  0b11101: 'Growth',     // WUBG
  0b11011: 'Altruism',   // WURG
  0b10111: 'Aggression', // WBRG
  0b01111: 'Chaos',      // UBRG
  0b11111: 'Balance',    // WUBRG
}

export const descriptions = {
  Colorless: (
    <Text>You have no personality. Sorry. ☹</Text>
  ),
  White: (
    <UnorderedList>
      <ListItem><b>Magic Mythos</b>: The type of mana drawn from the plains.</ListItem>
      <ListItem><b><Link href="//metagame.wtf" target="_blank">MetaGame</Link> Term</b>: Justice</ListItem>
      <ListItem>
        <Link href='https://humanparts.medium.com/the-mtg-color-wheel-c9700a7cf36d#e062:~:text=White%20seeks%20peace' target='_blank'><b>Sabien's Explanation</b></Link>:
        <UnorderedList>
          <ListItem><q>Peace through order…</q></ListItem>
          <ListItem><q>A white agent, when presented with a decision or quandary, asks <i>what is the <b>right</b> course of action to take</i>, where <q>right</q> depends on their moral or cultural framework.</q></ListItem>
        </UnorderedList>
      </ListItem>
      <ListItem><Link href='https://mtg.fandom.com/wiki/White' target='_blank'>White on the <acronym title='Magic: The Gathering'>MTG</acronym> Wiki</Link></ListItem>
    </UnorderedList>
  ),
  Blue: (
    <UnorderedList>
      <ListItem><b>Magic Mythos</b>: The type of mana drawn from islands.</ListItem>
      <ListItem><b><Link href="//metagame.wtf" target="_blank">MetaGame</Link> Term</b>: Wisdom</ListItem>
      <ListItem>
        <Link href='//humanparts.medium.com/the-mtg-color-wheel-c9700a7cf36d#da92:~:text=Blue%20seeks%20perfection' target='_blank'><b>Sabien's Explanation</b></Link>:
        <UnorderedList>
          <ListItem><q>Perfection through knowledge…</q></ListItem>
          <ListItem><q>A blue agent, when presented with a decision or quandary, asks <i>what course of action makes the most <b>sense</b></i>, where <q>sense</q> is determined by careful thought and the application of knowledge and expertise.</q></ListItem>
        </UnorderedList>
      </ListItem>
      <ListItem><Link href='https://mtg.fandom.com/wiki/Blue' target='_blank'>Blue on the <acronym title='Magic: The Gathering'>MTG</acronym> Wiki</Link></ListItem>
    </UnorderedList>
  ),
  Black: (
    <UnorderedList>
      <ListItem><b>Magic Mythos</b>: The type of mana drawn from swamps.</ListItem>
      <ListItem><b><Link href="//metagame.wtf" target="_blank">MetaGame</Link> Term</b>: Ambition</ListItem>
      <ListItem>
        <Link href='//humanparts.medium.com/the-mtg-color-wheel-c9700a7cf36d#4c78:~:text=Black%20seeks%20satisfaction' target='_blank'><b>Sabien's Explanation</b></Link>:
        <UnorderedList>
          <ListItem><q>Satisfaction through ruthlessness…</q></ListItem>
          <ListItem><q>A black agent, when presented with a decision or quandary, asks <i>what course of action will leave me <b>best off</b></i>, where <q>best off</q> includes having power, influence, safety, and wealth, as well as having moved closer to one's goals.</q></ListItem>
        </UnorderedList>
      </ListItem>
      <ListItem><Link href='//mtg.fandom.com/wiki/Black' target='_blank'>Black on the <acronym title='Magic: The Gathering'>MTG</acronym> Wiki</Link></ListItem>
    </UnorderedList>
  ),
  Red: (
    <UnorderedList>
      <ListItem><b>Magic Mythos</b>: The type of mana drawn from mountains.</ListItem>
      <ListItem><b><Link href="//metagame.wtf" target="_blank">MetaGame</Link> Term</b>: Chaos</ListItem>
      <ListItem>
        <Link href='//humanparts.medium.com/the-mtg-color-wheel-c9700a7cf36d#4c78:~:text=Red%20seeks%20freedom' target='_blank'><b>Sabien's Explanation</b></Link>:
        <UnorderedList>
          <ListItem><q>Freedom through action…</q></ListItem>
          <ListItem>A red agent, when presented with a decision or quandary, asks <i>what do I <b>feel</b> like doing?</i></ListItem>
        </UnorderedList>
      </ListItem>
      <ListItem><Link href='//mtg.fandom.com/wiki/Red' target='_blank'>Red on the <acronym title='Magic: The Gathering'>MTG</acronym> Wiki</Link></ListItem>
    </UnorderedList>
  ),
  Green: (
    <UnorderedList>
      <ListItem><b>Magic Mythos</b>: The type of mana drawn from forests.</ListItem>
      <ListItem><b><Link href="//metagame.wtf" target="_blank">MetaGame</Link> Term</b>: Balance</ListItem>
      <ListItem><Link href='//humanparts.medium.com/the-mtg-color-wheel-c9700a7cf36d#4c78:~:text=Green%20seeks%20harmony' target='_blank'><b>Sabien's Explanation</b></Link>:
        <UnorderedList>
          <ListItem><q>Harmony through acceptance…</q></ListItem>
          <ListItem><q>A green agent, when presented with a decision or quandary, asks <i>how are these things usually done? What is the established wisdom?</i></q></ListItem>
        </UnorderedList>
      </ListItem>
      <ListItem><Link href='//mtg.fandom.com/wiki/Green' target='_blank'>Green on the <acronym title='Magic: The Gathering'>MTG</acronym> Wiki</Link></ListItem>
    </UnorderedList>
  ),
  'The Azorius Senate':(      // WU
    <UnorderedList>
      <ListItem><b>Magic Mythos</b>: The guild of Ravnica responsible for governing.</ListItem>
      <ListItem><b><Link href="//metagame.wtf" target="_blank">MetaGame</Link> Term</b>: Structure</ListItem>
      <ListItem><Link href='//humanparts.medium.com/the-mtg-color-wheel-c9700a7cf36d#bc9b:~:text=White%20and%20blue%20are%20the%20enemies%20of%20red' target='_blank'><b>Sabien's Explanation</b></Link>: <q>A white/blue agent asks the question <i>how do we know what's right and good?</i> The whole concept of a <q>rationality technique</q> is extremely white/blue — the idea that we might create carefully defined, algorithmic heuristics for doing things better according to some outside standard is not one that other color combinations are likely to produce.</q></ListItem>
      <ListItem><Link href='//mtg.fandom.com/wiki/Azorius_Senate' target='_blank'>The Azorius Senate on the <acronym title='Magic: The Gathering'>MTG</acronym> Wiki</Link></ListItem>
    </UnorderedList>
  ),
  'The House Dimir': (        // UB
    <UnorderedList>
      <ListItem><b>Magic Mythos</b>: The guild of Ravnica responsible for espionage.</ListItem>
      <ListItem><b><Link href="//metagame.wtf" target="_blank">MetaGame</Link> Term</b>: Growth Mindset</ListItem>
      <ListItem><Link href='//humanparts.medium.com/the-mtg-color-wheel-c9700a7cf36d#ce71:~:text=Blue%20and%20black%20are%20the%20enemies%20of%20green' target='_blank'><b>Sabien's Explanation</b></Link>: <q>A blue/black agent asks the question <i>how can I <b>best</b> achieve my goals?</i> It's fair to describe blue/black as the combination of <q>enlightened self-interest,</q> which is why it's not surprising to find it overrepresented in communities like LessWrong and Silicon Valley, which see themselves as attempting to disrupt the status quo for the better.</q></ListItem>
      <ListItem><Link href='//mtg.fandom.com/wiki/House_Dimir' target='_blank'>The House Dimir on the <acronym title='Magic: The Gathering'>MTG</acronym> Wiki</Link></ListItem>
    </UnorderedList>
  ),
  'The Golgari Swarm': (     // BG
    <UnorderedList>
      <ListItem><b>Magic Mythos</b>: The guild of Ravnica responsible for necromancy.</ListItem>
      <ListItem><b><Link href="//metagame.wtf" target="_blank">MetaGame</Link> Term</b>: Profanity</ListItem>
      <ListItem><Link href='//humanparts.medium.com/the-mtg-color-wheel-c9700a7cf36d#ce71:~:text=Blue%20and%20black%20are%20the%20enemies%20of%20green' target='_blank'><b>Sabien's Explanation</b></Link>: <q>A black/green agent asks the question <i>what costs must be paid to achieve the ideal?</i> … In our own society, certain branches of ecoterrorists and social justice activists are firmly in this class, and a lot of the actions taken by <acronym title="People for the Ethical Treament of Animals">PETA</acronym> seem to emerge from black/green motivations.</q></ListItem>
      <ListItem><Link href='//mtg.fandom.com/wiki/Golgari_Swarm' target='_blank'>The Golgari Swarm on the <acronym title='Magic: The Gathering'>MTG</acronym> Wiki</Link></ListItem>
    </UnorderedList>
  ),
  'The Gruul Clans': (       // RG
    <UnorderedList>
      <ListItem><b>Magic Mythos</b>: The guild of Ravnica responsible for membership.</ListItem>
      <ListItem><b><Link href="//metagame.wtf" target="_blank">MetaGame</Link> Term</b>: Authenticity</ListItem>
      <ListItem><Link href='//humanparts.medium.com/the-mtg-color-wheel-c9700a7cf36d#2ddf:~:text=Red%20and%20green%20are%20the%20enemies%20of%20blue' target='_blank'><b>Sabien's Explanation</b></Link>: <q>A red/green agent asks the question <i>where am I now, and where should I go?</i> A real-life activity that embodies red/green is Circling (à la the Authentic Relating community), which in part emphasizes setting aside narratives and frames and just being <i>present</i>, in the moment, with yourself and other people.</q></ListItem>
      <ListItem><Link href='//mtg.fandom.com/wiki/Gruul_Clans' target='_blank'>The Gruul Clans on the <acronym title='Magic: The Gathering'>MTG</acronym> Wiki</Link></ListItem>
    </UnorderedList>
  ),
  'The Selesnya Conclave': ( // WG
    <UnorderedList>
      <ListItem><b>Magic Mythos</b>: The guild of Ravnica responsible for spirituality.</ListItem>
      <ListItem><b><Link href="//metagame.wtf" target="_blank">MetaGame</Link> Term</b>: Community</ListItem>
      <ListItem><Link href='//humanparts.medium.com/the-mtg-color-wheel-c9700a7cf36d#c621:~:text=Green%20and%20white%20are%20the%20enemies%20of%20black' target='_blank'><b>Sabien's Explanation</b></Link>: <q>A green/white agent asks the question <i>what's fair and good?</i> Green/white institutions tend to be centered around compassionate endeavors, but if they go astray it's in the direction of well-meaning lost purposes and wasted signaling — a lack of blue's epistemic hygiene — rather than in the direction of cold, heartless efficiency or relentless pursuit of knowledge or the bottom line.</q></ListItem>
      <ListItem><Link href='//mtg.fandom.com/wiki/Selesnya_Conclave' target='_blank'>The Selesnya Conclave on the <acronym title='Magic: The Gathering'>MTG</acronym> Wiki</Link></ListItem>
    </UnorderedList>
  ),
  'The Simic Combine': (     // UG
    <UnorderedList>
      <ListItem><b>Magic Mythos</b>: The guild of Ravnica responsible for nature.</ListItem>
      <ListItem><b><Link href="//metagame.wtf" target="_blank">MetaGame</Link> Term</b>: Truth-Seeking</ListItem>
      <ListItem><Link href='//humanparts.medium.com/the-mtg-color-wheel-c9700a7cf36d#d770:~:text=blue%2Fgreen%20is%20the%20combination%20of%20truth%20seeking' target='_blank'><b>Sabien's Explanation</b></Link>: <q>A green/blue agent asks the question <i>what do I not yet understand?</i> The two most available and resonant examples of blue/green mentality in our society are genetic engineering, and Gendlin’s Focusing. Genetic engineering is maybe the central case of <q>see what’s <i>there</i>, so that you can rearrange it to make it better.</q></q></ListItem>
      <ListItem><Link href='https://mtg.fandom.com/wiki/Simic_Combine' target='_blank'>The Simic Combine on the <acronym title='Magic: The Gathering'>MTG</acronym> Wiki</Link></ListItem>
    </UnorderedList>
  ),
  'The Orzhov Syndicate': (  // WB
    <UnorderedList>
      <ListItem><b>Magic Mythos</b>: The guild of Ravnica responsible for business.</ListItem>
      <ListItem><b><Link href="//metagame.wtf" target="_blank">MetaGame</Link> Term</b>: Tribalism</ListItem>
      <ListItem><Link href='//humanparts.medium.com/the-mtg-color-wheel-c9700a7cf36d#79b3:~:text=The%20enemy%20colors%20white%20and%20black%20combine%20to%20form%20tribalism' target='_blank'><b>Sabien's Explanation</b></Link>: <q>A white/black agent asks the question <i>who’s in my circle of concern?</i> In our own society, the two major political parties have absolutely become white/black in their motivations in recent years, with the most disappointing example being the Republican party’s unwillingness or inability to do anything about the excesses of the president.</q></ListItem>
      <ListItem><Link href='//mtg.fandom.com/wiki/Orzhov_Syndicate' target='_blank'>The Orzhov Syndicate on the <acronym title='Magic: The Gathering'>MTG</acronym> Wiki</Link></ListItem>
    </UnorderedList>
  ),
  'The Izzet League': (      // UR
    <UnorderedList>
      <ListItem><b>Magic Mythos</b>: The guild of Ravnica responsible for municipal works.</ListItem>
      <ListItem><b><Link href="//metagame.wtf" target="_blank">MetaGame</Link> Term</b>: Creativity</ListItem>
      <ListItem><Link href='//humanparts.medium.com/the-mtg-color-wheel-c9700a7cf36d#106b:~:text=Blue%20and%20red%20taken%20together%20are%20the%20colors%20of%20creativity' target='_blank'><b>Sabien's Explanation</b></Link>: <q>A blue/red agent asks the question <i>what can be achieved? What might be possible?</i> The comparison to Tony Stark is maybe starting to wear thin, but in point of fact Elon Musk’s endeavors <i>are</i> one of our strongest examples of blue/red mentality in today’s society.</q></ListItem>
      <ListItem><Link href='//mtg.fandom.com/wiki/Izzet_League' target='_blank'>The Izzet League on the <acronym title='Magic: The Gathering'>MTG</acronym> Wiki</Link></ListItem>
    </UnorderedList>
  ),
  'The Cult of Rakdos': (    // BR
    <UnorderedList>
      <ListItem><b>Magic Mythos</b>: The guild of Ravnica responsible for service work.</ListItem>
      <ListItem><b><Link href="//metagame.wtf" target="_blank">MetaGame</Link> Term</b>: Independence</ListItem>
      <ListItem><Link href='https://humanparts.medium.com/the-mtg-color-wheel-c9700a7cf36d#b38b:~:text=Black%20and%20red%20are%20the%20enemies%20of%20white' target='_blank'><b>Sabien's Explanation</b></Link>: <q>A black/red agent asks the question <i>how do I get what I <b>want</b>?</i> Because of its dismissive attitude toward judgment and social mores, black/red is often the combination of endorsed hedonism and <q>live and let live.</q> The BDSM and kink communities are fundamentally black/red…</q></ListItem>
      <ListItem><Link href='https://mtg.fandom.com/wiki/Cult_of_Rakdos' target='_blank'>The Cult of Rakdos on the <acronym title='Magic: The Gathering'>MTG</acronym> Wiki</Link></ListItem>
    </UnorderedList>
  ),
  'The Boros Legion': (      // WR
    <UnorderedList>
      <ListItem><b>Magic Mythos</b>: The guild of Ravnica responsible for policing.</ListItem>
      <ListItem><b><Link href="//metagame.wtf" target="_blank">MetaGame</Link> Term</b>: Heroism</ListItem>
      <ListItem><Link href='//humanparts.medium.com/the-mtg-color-wheel-c9700a7cf36d#e6bc:~:text=red%20and%20white%20are%20the%20colors%20of%20heroism' target='_blank'><b>Sabien's Explanation</b></Link>: <q>A red/white agent asks the question <i>what needs to be done? What would a good person do?</i> In the 2016 presidential race, Bernie Sanders was attempting to position himself as the red/white candidate in contrast to Clinton’s blue/white and Trump’s red/black, and there are strong red/white motivations in the people who continue to support his platform and push back against the current political status quo.</q></ListItem>
      <ListItem><Link href='//mtg.fandom.com/wiki/Boros_Legion' target='_blank'>The Boros Legion on the <acronym title='Magic: The Gathering'>MTG</acronym> Wiki</Link></ListItem>
    </UnorderedList>
  ),
  'The Bant Shard': (        // WUG
    <UnorderedList>
      <ListItem><b>Magic Mythos</b>: The shard of Alara inhabited by angels.</ListItem>
      <ListItem><b><Link href="//metagame.wtf" target="_blank">MetaGame</Link> Term</b>: Complacence</ListItem>
      <ListItem><Link href='//humanparts.medium.com/the-mtg-color-wheel-c9700a7cf36d#34d7:~:text=%E2%80%9CBant%E2%80%9D' target='_blank'><b>Sabien's Explanation</b></Link>: <q>A slow progression to fulfillment…</q></ListItem>
      <ListItem><Link href='//mtg.fandom.com/wiki/Bant' target='_blank'>The Bant Shard on the <acronym title='Magic: The Gathering'>MTG</acronym> Wiki</Link></ListItem>
    </UnorderedList>
  ),
  'The Esper Shard': (       // WUB
    <UnorderedList>
      <ListItem><b>Magic Mythos</b>: The shard of Alara inhabited by sphinxes.</ListItem>
      <ListItem><b><Link href="//metagame.wtf" target="_blank">MetaGame</Link> Term</b>: Dedication</ListItem>
      <ListItem><Link href='//humanparts.medium.com/the-mtg-color-wheel-c9700a7cf36d#34d7:~:text=%E2%80%9CEsper%E2%80%9D' target='_blank'><b>Sabien's Explanation</b></Link>: <q>A methodical approach toward a better future for oneself…</q></ListItem>
      <ListItem><Link href='https://mtg.fandom.com/wiki/Esper' target='_blank'>The Esper Shard on the <acronym title='Magic: The Gathering'>MTG</acronym> Wiki</Link></ListItem>
    </UnorderedList>
  ),
  'The Grixis Shard': (      // UBR
    <UnorderedList>
      <ListItem><b>Magic Mythos</b>: The shard of Alara inhabited by demons.</ListItem>
      <ListItem><b><Link href="//metagame.wtf" target="_blank">MetaGame</Link> Term</b>: Iconoclasm</ListItem>
      <ListItem><Link href='https://humanparts.medium.com/the-mtg-color-wheel-c9700a7cf36d#34d7:~:text=%E2%80%9CGrixis%E2%80%9D' target='_blank'><b>Sabien's Explanation</b></Link>: <q>The well-behaved rarely make history…</q></ListItem>
      <ListItem><Link href='https://mtg.fandom.com/wiki/Grixis' target='_blank'>The Grixis Shard on the <acronym title='Magic: The Gathering'>MTG</acronym> Wiki</Link></ListItem>
    </UnorderedList>
  ),
  'The Jund Shard': (        // BRG
    <UnorderedList>
      <ListItem><b>Magic Mythos</b>: The shard of Alara inhabited by dragons.</ListItem>
      <ListItem><b><Link href="//metagame.wtf" target="_blank">MetaGame</Link> Term</b>: Realism</ListItem>
      <ListItem><Link href='https://humanparts.medium.com/the-mtg-color-wheel-c9700a7cf36d#34d7:~:text=%E2%80%9CJund%E2%80%9D' target='_blank'><b>Sabien's Explanation</b></Link>: <q>A feral realism…</q></ListItem>
      <ListItem><Link href='https://mtg.fandom.com/wiki/Jund' target='_blank'>The Jund Shard on the <acronym title='Magic: The Gathering'>MTG</acronym> Wiki</Link></ListItem>
    </UnorderedList>
  ),
  'The Naya Shard': (        // WRG
    <UnorderedList>
      <ListItem><b>Magic Mythos</b>: The shard of Alara inhabited by behemoths.</ListItem>
      <ListItem><b><Link href="//metagame.wtf" target="_blank">MetaGame</Link> Term</b>: Contentment</ListItem>
      <ListItem><Link href='https://humanparts.medium.com/the-mtg-color-wheel-c9700a7cf36d#34d7:~:text=%E2%80%9CNaya%E2%80%9D' target='_blank'><b>Sabien's Explanation</b></Link>: <q>A vibrant commitment to one's way of life…</q></ListItem>
      <ListItem><Link href='https://mtg.fandom.com/wiki/Naya' target='_blank'>The Naya Shard on the <acronym title='Magic: The Gathering'>MTG</acronym> Wiki</Link></ListItem>
    </UnorderedList>
  ),
  'The Jeskai Way': (        // WUR
    <UnorderedList>
      <ListItem><b>Magic Mythos</b>: The clan of Tarkir concerned with cunning.</ListItem>
      <ListItem><b><Link href="//metagame.wtf" target="_blank">MetaGame</Link> Term</b>: Cunning</ListItem>
      <ListItem><Link href='https://humanparts.medium.com/the-mtg-color-wheel-c9700a7cf36d#34d7:~:text=%E2%80%9CJeskai%E2%80%9D' target='_blank'><b>Sabien's Explanation</b></Link>: <q>A cycle of inspiration, investigation, &amp; evaluation…</q></ListItem>
      <ListItem><Link href='https://mtg.fandom.com/wiki/Jeskai_Way' target='_blank'>The Jeskai Way on the <acronym title='Magic: The Gathering'>MTG</acronym> Wiki</Link></ListItem>
    </UnorderedList>
  ),
  'The Sultai Brood': (      // UBG
    <UnorderedList>
      <ListItem><b>Magic Mythos</b>: The clan of Tarkir concerned with ruthlessness.</ListItem>
      <ListItem><b><Link href="//metagame.wtf" target="_blank">MetaGame</Link> Term</b>: Ruthlessness</ListItem>
      <ListItem><Link href='https://humanparts.medium.com/the-mtg-color-wheel-c9700a7cf36d#34d7:~:text=%E2%80%9CSultai%E2%80%9D' target='_blank'><b>Sabien's Explanation</b></Link>: <q>A driven wanting, sure and unyielding…</q></ListItem>
      <ListItem><Link href='https://mtg.fandom.com/wiki/Sultai_Brood' target='_blank'>The Sultai Brood on the <acronym title='Magic: The Gathering'>MTG</acronym> Wiki</Link></ListItem>
    </UnorderedList>
  ),
  'The Mardu Horde': (       // WBR
    <UnorderedList>
      <ListItem><b>Magic Mythos</b>: The clan of Tarkir concerned with speed.</ListItem>
      <ListItem><b><Link href="//metagame.wtf" target="_blank">MetaGame</Link> Term</b>: Speed</ListItem>
      <ListItem><Link href='https://humanparts.medium.com/the-mtg-color-wheel-c9700a7cf36d#34d7:~:text=%E2%80%9CMardu%E2%80%9D' target='_blank'><b>Sabien's Explanation</b></Link>: <q>Chooses a people or principle to defend, stands their ground, then moves on…</q></ListItem>
      <ListItem><Link href='https://mtg.fandom.com/wiki/Mardu_Horde' target='_blank'>The Mardu Horde on the <acronym title='Magic: The Gathering'>MTG</acronym> Wiki</Link></ListItem>
    </UnorderedList>
  ),
  'The Temur Frontier': (    // URG
    <UnorderedList>
      <ListItem><b>Magic Mythos</b>: The clan of Tarkir concerned with savagery.</ListItem>
      <ListItem><b><Link href="//metagame.wtf" target="_blank">MetaGame</Link> Term</b>: Savagery</ListItem>
      <ListItem><Link href='https://humanparts.medium.com/the-mtg-color-wheel-c9700a7cf36d#34d7:~:text=%E2%80%9CTemur%E2%80%9D' target='_blank'><b>Sabien's Explanation</b></Link>: <q>An insatiable desire to play, explore, discover, &amp; understand…</q></ListItem>
      <ListItem><Link href='https://mtg.fandom.com/wiki/Temur_Frontier' target='_blank'>The Temur Frontier on the <acronym title='Magic: The Gathering'>MTG</acronym> Wiki</Link></ListItem>
    </UnorderedList>
  ),
  'The Abzan Houses': (      // WBG
    <UnorderedList>
      <ListItem><b>Magic Mythos</b>: The clan of Tarkir concerned with endurance.</ListItem>
      <ListItem><b><Link href="//metagame.wtf" target="_blank">MetaGame</Link> Term</b>: Endurance</ListItem>
      <ListItem><Link href='https://humanparts.medium.com/the-mtg-color-wheel-c9700a7cf36d#34d7:~:text=%E2%80%9CAbzan%E2%80%9D' target='_blank'><b>Sabien's Explanation</b></Link>: <q>An unyielding certainty as to one's place…</q></ListItem>
      <ListItem><Link href='https://mtg.fandom.com/wiki/Abzan_Houses' target='_blank'>The Abzan Houses on the <acronym title='Magic: The Gathering'>MTG</acronym> Wiki</Link></ListItem>
    </UnorderedList>
  ),
  'Artifice': (          // WUBR
    <UnorderedList>
      <ListItem><b>Magic Mythos</b>: The four coloring missing green.</ListItem>
      <ListItem><b><Link href="//metagame.wtf" target="_blank">MetaGame</Link> Term</b>: Artifice</ListItem>
      <ListItem>ToDo: Generate something for here…</ListItem>
    </UnorderedList>
  ),
  'Growth': (            // WUBG
    <UnorderedList>
      <ListItem><b>Magic Mythos</b>: The four coloring missing red.</ListItem>
      <ListItem><b><Link href="//metagame.wtf" target="_blank">MetaGame</Link> Term</b>: Growth</ListItem>
      <ListItem>ToDo: Generate something for here…</ListItem>
    </UnorderedList>
  ),
  'Altruism': (          // WURG
    <UnorderedList>
      <ListItem><b>Magic Mythos</b>: The four coloring missing black.</ListItem>
      <ListItem><b><Link href="//metagame.wtf" target="_blank">MetaGame</Link> Term</b>: Altruism</ListItem>
      <ListItem>ToDo: Generate something for here…</ListItem>
    </UnorderedList>
  ),
  'Aggression': (        // WBRG
    <UnorderedList>
      <ListItem><b>Magic Mythos</b>: The four coloring missing blue.</ListItem>
      <ListItem><b><Link href="//metagame.wtf" target="_blank">MetaGame</Link> Term</b>: Aggression</ListItem>
      <ListItem>ToDo: Generate something for here…</ListItem>
    </UnorderedList>
  ),
  'Chaos': (             // UBRG
    <UnorderedList>
      <ListItem><b>Magic Mythos</b>: The four coloring missing white.</ListItem>
      <ListItem><b><Link href="//metagame.wtf" target="_blank">MetaGame</Link> Term</b>: Turmoil</ListItem>
      <ListItem>ToDo: Generate something for here…</ListItem>
    </UnorderedList>
  ),
  'Balance': (
    <UnorderedList>
      <ListItem><b>Magic Mythos</b>: The five coloring.</ListItem>
      <ListItem><b><Link href="//metagame.wtf" target="_blank">MetaGame</Link> Term</b>: Wholeness</ListItem>
      <ListItem>ToDo: Generate something for here…</ListItem>
    </UnorderedList>
  ),
}