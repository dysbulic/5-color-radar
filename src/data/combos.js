import { Text, Link, Stack } from '@chakra-ui/react'

export const masks = {
	0b00000: 'Colorless',
	0b10000: 'White',
	0b01000: 'Blue',
	0b00100: 'Black',
	0b00010: 'Red',
	0b00001: 'Green',
  0b11000: 'Azorius Senate',    // WU
  0b01100: 'House Dimir',       // UB
  0b00101: 'Golgari Swarm',     // BG
  0b00011: 'Gruul Clans',       // RG
  0b10001: 'Selesnya Conclave', // WG
  0b01001: 'Simic Combine',     // UG
  0b10100: 'Orzhov Syndicate',  // WB
  0b01010: 'Izzet League',      // UR
  0b00110: 'Cult of Rakdos',    // BR
  0b10010: 'Boros Legion',      // WR
  0b11001: 'Bant Shard',        // WUG
  0b11100: 'Esper Shard',       // WUB
  0b01110: 'Grixis Shard',      // UBR
  0b00111: 'Jund Shard',        // BRG
  0b10011: 'Naya Shard',        // WRG
  0b11010: 'Jeskai Way',        // WUR
  0b01101: 'Sultai Brood',      // UBG
  0b10110: 'Mardu Horde',       // WBR
  0b01011: 'Temur Frontier',    // URG
  0b10101: 'Abzan Houses',      // WBG
  0b11110: 'Artifice',   // WUBR
  0b11101: 'Growth',     // WUBG
  0b11011: 'Altruism',   // WURG
  0b10111: 'Aggression', // WBRG
  0b01111: 'Chaos',      // UBRG
	0b11111: 'WUBRG',
}

export const descriptions = {
  Colorless: (
    <Text>You have no personality. Sorry. ☹</Text>
  ),
  White: (
    <Stack>
      <Text><Link href='https://humanparts.medium.com/the-mtg-color-wheel-c9700a7cf36d#e062:~:text=White%20seeks%20peace'><Text as='span' fontWeight='bold'>White</Text> seeks <Text as='i'>peace</Text>,</Link> and it tries to achieve that peace through the imposition of <Text as='i'>order</Text>. White believes that the solution to all suffering and unhappiness is coordination and cooperation and rules and restraint. The archetypal white organization would be a church, and a white dystopia would be a fascist regime such as the one in George Orwell’s <Text as='cite'>1984</Text>, or a stagnant society like the one in Lois Lowry’s <Text as='cite'>The Giver</Text>.</Text>
      <Text>A white agent, when presented with a decision or quandary, asks <Text as='i'>what is the <Text as='b'>right</Text> course of action to take</Text>, where <Text as='q'>right</Text> depends on their moral or cultural framework.</Text>
    </Stack>
  ),
  Blue: (
    <Stack>
      <Text><Link href='https://humanparts.medium.com/the-mtg-color-wheel-c9700a7cf36d#da92:~:text=Blue%20seeks%20perfection'><Text as='span' fontWeight='bold'>Blue</Text> seeks <Text as='i'>perfection</Text>,</Link> and it tries to achieve that perfection through the pursuit of <Text as='i'>knowledge</Text>. Blue believes that things could be almost arbitrarily good if we could all just figure out the truth, and then apply that understanding to its fullest extent. The archetypal blue organization would be a university or a research lab, and a blue dystopia would be one in which efficiency were pursued without morals or limits, or in which intelligence were the sole axis of a meritocracy.</Text>
      <Text>A blue agent, when presented with a decision or quandary, asks <Text as='i'>what course of action makes the most <Text as='b'>sense</Text></Text>, where <Text as='i'>sense</Text> is determined by careful thought and the application of knowledge and expertise.</Text>
    </Stack>
  ),
  Black: (
    <Stack>
      <Text><Link href='https://humanparts.medium.com/the-mtg-color-wheel-c9700a7cf36d#4c78:~:text=Black%20seeks%20satisfaction'><Text as='b'>Black</Text> seeks <Text as='i'>satisfaction</Text>,</Link> and it tries to achieve that satisfaction through <Text as='i'>ruthlessness</Text>. Black wants power and agency so that it can act upon its preferences at any time, reshaping the world around it into whatever it wants. It recognizes no limits upon this pursuit except those which emerge from its own desires and self-interest. It is capable of cooperation and alliance, but only consequentially, as in game theory; at its core, black is amoral, not immoral, since it doesn’t think morality is even really a Thing. The archetypal black organization would be a hedge fund or a startup, and a black dystopia would be a totalitarian dictatorship.</Text>
      <Text>A black agent, when presented with a decision or quandary, asks <i>what course of action will leave me <b>best off</b></i>, where <q>best off</q> includes having power, influence, safety, and wealth, as well as having moved closer to one’s goals.</Text>
    </Stack>
  ),
  Red: (
    <Stack>
      <Text><Link href='https://humanparts.medium.com/the-mtg-color-wheel-c9700a7cf36d#4c78:~:text=Black%20seeks%20satisfaction'><Text as='b'>Red</Text> seeks <Text as='i'>freedom</Text>,</Link> and it tries to achieve that freedom through <Text as='i'>action</Text>. Red wants the ability to live in the moment and follow the thread of aliveness and passion. It’s a bit strange to speak of a red <Text as='q'>organization,</Text> but to the extent that it’s <i>possible</i> to have an archetypal red organization, it would be one of those art studios that’s owned by no one where there’s paint on every wall and it’s almost impossible to move around what with all of the dancing and debating and half-finished projects. A red dystopia, on the other hand, would simply be anarchy.</Text>
      <Text>A red agent, when presented with a decision or quandary, asks <i>what do I <b>feel</b> like doing?</i></Text>
    </Stack>
  ),
  Green: (
    <Stack>
      <Text><b>Green</b> seeks <i>harmony</i>, and it tries to achieve that harmony through <i>acceptance</i>. Green is the color of nature, wisdom, stoicism, taoism, and destiny; it believes that most of the suffering and misfortune in the world comes from attempts to cast off one’s natural mantle, step outside of one’s natural role, or fix things which aren’t broken — it’s the color of Chesterton’s Fence. It seeks to embrace what is — the archetypal green organization would be a hippie commune, or the pop culture interpretation of a Native American tribe (such as in Disney’s <cite>Pocahontas</cite>), while a green dystopia would be something like the society in <cite>Divergent</cite> or a tribe with absolutely rigid traditions and an unchanging and unchangeable relationship to its environment.</Text>
      <Text>A green agent, when presented with a decision or quandary, asks <i>how are these things usually done?</i> <i>What is the established wisdom?</i></Text>
    </Stack>
  ),
  'Azorius Senate':(      // WU
    <Stack>
      <Text></Text>
      <Text></Text>
    </Stack>
  ),
  'House Dimir': (        // UB
    <Stack>
      <Text><Link href='https://humanparts.medium.com/the-mtg-color-wheel-c9700a7cf36d#ce71:~:text=Blue%20and%20black%20are%20the%20enemies%20of%20green'>Blue and black are the enemies of green</Link>, which they see as complacent and passive. Blue and black both agree on <i>growth mindset</i> — the idea that one is not defined by one’s origins or constrained to the role society has set. Blue/black characters are often intelligent, clever, arrogant, and aloof — notable examples include Odysseus from <cite>The Odyssey</cite>, Sherlock Holmes, Lex Luthor, and Quirinus Quirrell from <cite>HPMOR</cite>.</Text>
      <Text>A blue/black agent asks the question <i>how can I <b>best</b> achieve my goals?</i> It’s fair to describe blue/black as the combination of <q>enlightened self-interest,</q> which is why it’s not surprising to find it overrepresented in communities like LessWrong and Silicon Valley, which see themselves as attempting to disrupt the status quo for the better. Transhumanism is a fundamentally blue-black worldview, in opposition to the green imperative to accept death as a crucial and inevitable part of life.</Text>
    </Stack>
  ),
  'Golgari Swarm': (     // BG
    <Stack>
      <Text></Text>
      <Text></Text>
    </Stack>
  ),
  'Gruul Clans': (       // RG
    <Stack>
      <Text></Text>
      <Text></Text>
    </Stack>
  ),
  'Selesnya Conclave': ( // WG
    <Stack>
      <Text></Text>
      <Text></Text>
    </Stack>
  ),
  'Simic Combine': (     // UG
    <Stack>
      <Text></Text>
      <Text></Text>
    </Stack>
  ),
  'Orzhov Syndicate': (  // WB
    <Stack>
      <Text></Text>
      <Text></Text>
    </Stack>
  ),
  'Izzet League': (      // UR
    <Stack>
      <Text></Text>
      <Text></Text>
    </Stack>
  ),
  'Cult of Rakdos': (    // BR
    <Stack>
      <Text></Text>
      <Text></Text>
    </Stack>
  ),
  'Boros Legion': (      // WR
    <Stack>
      <Text></Text>
      <Text></Text>
    </Stack>
  ),
  'Bant Shard': (        // WUG
    <Stack>
      <Text></Text>
      <Text></Text>
    </Stack>
  ),
  'Esper Shard': (       // WUB
    <Stack>
      <Text></Text>
      <Text></Text>
    </Stack>
  ),
  'Grixis Shard': (      // UBR
    <Stack>
      <Text></Text>
      <Text></Text>
    </Stack>
  ),
  'Jund Shard': (        // BRG
    <Stack>
      <Text></Text>
      <Text></Text>
    </Stack>
  ),
  'Naya Shard': (        // WRG
    <Stack>
      <Text></Text>
      <Text></Text>
    </Stack>
  ),
  'Jeskai Way': (        // WUR
    <Stack>
      <Text></Text>
      <Text></Text>
    </Stack>
  ),
  'Sultai Brood': (      // UBG
    <Stack>
      <Text></Text>
      <Text></Text>
    </Stack>
  ),
  'Mardu Horde': (       // WBR
    <Stack>
      <Text></Text>
      <Text></Text>
    </Stack>
  ),
  'Temur Frontier': (    // URG
    <Stack>
      <Text></Text>
      <Text></Text>
    </Stack>
  ),
  'Abzan Houses': (      // WBG
    <Stack>
      <Text></Text>
      <Text></Text>
    </Stack>
  ),
  'Artifice': (          // WUBR
    <Stack>
      <Text></Text>
      <Text></Text>
    </Stack>
  ),
  'Growth': (            // WUBG
    <Stack>
      <Text></Text>
      <Text></Text>
    </Stack>
  ),
  'Altruism': (          // WURG
    <Stack>
      <Text></Text>
      <Text></Text>
    </Stack>
  ),
  'Aggression': (        // WBRG
    <Stack>
      <Text></Text>
      <Text></Text>
    </Stack>
  ),
  'Chaos': (             // UBRG
    <Stack>
      <Text></Text>
      <Text></Text>
    </Stack>
  ),
  'WUBRG': (
    <Stack>
      <Text></Text>
      <Text></Text>
    </Stack>
  ),
}