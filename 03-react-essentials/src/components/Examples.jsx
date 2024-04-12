import { EXAMPLES } from '../data';
import TabButton from './TabButton';
import Section from './Section';
import { useState } from 'react';
import Tabs from './Tabs';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <Section id="examples" title="Examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic == 'components'}
              onSelect={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic == 'jsx'}
              onSelect={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic == 'props'}
              onSelect={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic == 'state'}
              onSelect={() => handleSelect('state')}
            >
              State
            </TabButton>
          </>
        }
      >
        {!selectedTopic ? (
          <p>Please select a topic. </p>
        ) : (
          <div id="tabbed-content">
            <h2>{EXAMPLES[selectedTopic].title}</h2>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
}
