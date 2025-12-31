import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import {
  Option,
  OptionName,
  OptionChoices,
  OptionChoiceRepeater,
  Choice,
  ChoiceText,
  ChoiceColor,
} from '@wix/stores/components';

export default function TestOptionPage() {
  const [selectedSize, setSelectedSize] = React.useState('M');
  const [selectedColor, setSelectedColor] = React.useState('#004D25');

  // Mock option data
  const mockSizeOption = {
    name: 'Size',
    choices: [
      { id: 'xs', text: 'XS' },
      { id: 's', text: 'S' },
      { id: 'm', text: 'M' },
      { id: 'l', text: 'L' },
      { id: 'xl', text: 'XL' },
    ]
  };

  const mockColorOption = {
    name: 'Color',
    choices: [
      { id: 'navy', color: '#004D25', text: 'Navy' },
      { id: 'black', color: '#000000', text: 'Black' },
      { id: 'white', color: '#FFFFFF', text: 'White' },
      { id: 'gray', color: '#999999', text: 'Gray' },
    ]
  };

  return (
    <div className="min-h-screen bg-background text-primary py-12 px-4 md:px-8">
      <div className="max-w-[120rem] mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 mb-8 hover:text-primary-foreground">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="font-heading text-5xl md:text-6xl uppercase mb-8">Test Option Component</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
          {/* Live Option Component Example */}
          <div className="bg-white border-2 border-primary p-8 rounded-lg">
            <h2 className="font-heading text-2xl uppercase mb-6">Option Component Example</h2>
            
            <div className="space-y-8">
              {/* Size Option Example */}
              <Option>
                <div className="space-y-3">
                  <OptionName className="font-heading text-lg uppercase text-primary">
                    {mockSizeOption.name}
                  </OptionName>
                  <OptionChoices>
                    <div className="flex flex-wrap gap-2">
                      {mockSizeOption.choices.map((choice) => (
                        <button
                          key={choice.id}
                          onClick={() => setSelectedSize(choice.text)}
                          className={`px-4 py-2 border-2 transition-all font-heading text-sm uppercase ${
                            selectedSize === choice.text
                              ? 'border-primary bg-primary text-primary-foreground'
                              : 'border-primary/20 hover:border-primary'
                          }`}
                        >
                          {choice.text}
                        </button>
                      ))}
                    </div>
                  </OptionChoices>
                  <p className="font-paragraph text-sm text-primary/60">Selected: {selectedSize}</p>
                </div>
              </Option>

              {/* Color Option Example */}
              <Option>
                <div className="space-y-3">
                  <OptionName className="font-heading text-lg uppercase text-primary">
                    {mockColorOption.name}
                  </OptionName>
                  <OptionChoices>
                    <div className="flex gap-3">
                      {mockColorOption.choices.map((choice) => (
                        <button
                          key={choice.id}
                          onClick={() => setSelectedColor(choice.color)}
                          className={`w-10 h-10 rounded-full border-4 transition-all ${
                            selectedColor === choice.color
                              ? 'border-primary ring-2 ring-primary'
                              : 'border-primary/20 hover:border-primary'
                          }`}
                          style={{ backgroundColor: choice.color }}
                          title={choice.text}
                        />
                      ))}
                    </div>
                  </OptionChoices>
                  <p className="font-paragraph text-sm text-primary/60">Selected: {mockColorOption.choices.find(c => c.color === selectedColor)?.text}</p>
                </div>
              </Option>
            </div>
          </div>

          {/* Documentation */}
          <div className="space-y-4">
            <div className="bg-white border-2 border-primary p-8 rounded-lg">
              <h3 className="font-heading text-2xl uppercase mb-4">Option Component Features</h3>
              <ul className="font-paragraph text-sm space-y-2 list-disc list-inside">
                <li>Display product option names (Size, Color, etc.)</li>
                <li>Render option choices (variants)</li>
                <li>Handle option selection and state</li>
                <li>Support for mandatory option indicators</li>
                <li>Display option descriptions</li>
                <li>Handle different choice types (text, color, free text)</li>
                <li>Manage option validation</li>
                <li>Support for disabled/unavailable options</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-primary p-8 rounded-lg">
              <h3 className="font-heading text-lg uppercase mb-4">Option Types:</h3>
              <ul className="font-paragraph text-sm space-y-2 list-disc list-inside">
                <li><strong>Text Options:</strong> Size, Material, Style</li>
                <li><strong>Color Options:</strong> Color swatches</li>
                <li><strong>Free Text:</strong> Custom engraving, personalization</li>
                <li><strong>Dropdown:</strong> Select from list</li>
              </ul>
            </div>

            <div className="bg-primary text-primary-foreground border-2 border-primary p-8 rounded-lg">
              <h3 className="font-heading text-lg uppercase mb-4">Example Structure:</h3>
              <pre className="font-mono text-xs overflow-x-auto">
{`<Option>
  <OptionName>Size</OptionName>
  <OptionChoices>
    <OptionChoiceRepeater>
      <Choice>
        <ChoiceText>Large</ChoiceText>
      </Choice>
    </OptionChoiceRepeater>
  </OptionChoices>
</Option>`}
              </pre>
            </div>
          </div>
        </div>

        <Link to="/">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-3 font-heading uppercase">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
