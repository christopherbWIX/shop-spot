import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Choice, ChoiceText, ChoiceColor } from '@/components/ui/store/Choice';

export default function TestChoicePage() {
  const [selectedChoice, setSelectedChoice] = React.useState('large');
  const [selectedColor, setSelectedColor] = React.useState('#004D25');

  return (
    <div className="min-h-screen bg-background text-primary py-12 px-4 md:px-8">
      <div className="max-w-[120rem] mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 mb-8 hover:text-primary-foreground">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="font-heading text-5xl md:text-6xl uppercase mb-8">Test Choice Component</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
          {/* Choice Example */}
          <div className="bg-white border-2 border-primary p-8 rounded-lg">
            <h2 className="font-heading text-2xl uppercase mb-6">Choice Component Example</h2>
            
            <div className="space-y-8">
              {/* Text Choices */}
              <div className="space-y-3">
                <h3 className="font-heading text-lg uppercase">Text Choices (Size)</h3>
                <div className="flex gap-3 flex-wrap">
                  {['small', 'medium', 'large', 'xlarge'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedChoice(size)}
                      className={`px-4 py-2 border-2 transition-all font-heading uppercase text-sm ${
                        selectedChoice === size
                          ? 'border-primary bg-primary text-primary-foreground scale-110'
                          : 'border-primary/20 hover:border-primary hover:scale-105'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <p className="font-paragraph text-sm text-primary/60">Selected: {selectedChoice}</p>
              </div>

              {/* Color Choices */}
              <div className="space-y-3">
                <h3 className="font-heading text-lg uppercase">Color Choices</h3>
                <div className="flex gap-4">
                  {[
                    { name: 'Navy', color: '#004D25' },
                    { name: 'Black', color: '#000000' },
                    { name: 'White', color: '#FFFFFF' },
                    { name: 'Gray', color: '#999999' },
                    { name: 'Beige', color: '#D4C5B9' },
                  ].map((item) => (
                    <button
                      key={item.name}
                      onClick={() => setSelectedColor(item.color)}
                      className={`w-12 h-12 rounded-full border-4 transition-all transform hover:scale-110 ${
                        selectedColor === item.color
                          ? 'border-primary ring-2 ring-primary scale-125'
                          : 'border-primary/20 hover:border-primary'
                      }`}
                      style={{ backgroundColor: item.color }}
                      title={item.name}
                    />
                  ))}
                </div>
                <p className="font-paragraph text-sm text-primary/60">Selected: {selectedColor}</p>
              </div>

              {/* Disabled Choices */}
              <div className="space-y-3">
                <h3 className="font-heading text-lg uppercase">With Disabled States</h3>
                <div className="flex gap-3 flex-wrap">
                  {['Available', 'Limited Stock', 'Out of Stock'].map((status, idx) => (
                    <button
                      key={status}
                      disabled={idx === 2}
                      className={`px-4 py-2 border-2 transition-all font-heading uppercase text-sm ${
                        idx === 2
                          ? 'border-primary/20 text-primary/40 cursor-not-allowed opacity-50'
                          : 'border-primary/20 hover:border-primary'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Documentation */}
          <div className="space-y-4">
            <div className="bg-white border-2 border-primary p-8 rounded-lg">
              <h3 className="font-heading text-2xl uppercase mb-4">Choice Component Features</h3>
              <ul className="font-paragraph text-sm space-y-2 list-disc list-inside">
                <li>Display individual variant choices</li>
                <li>Handle choice selection and state</li>
                <li>Support for text-based choices</li>
                <li>Support for color swatches</li>
                <li>Support for free text input</li>
                <li>Show selected/unselected states</li>
                <li>Handle disabled/unavailable choices</li>
                <li>Hover and active state styling</li>
                <li>Accessibility features</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-primary p-8 rounded-lg">
              <h3 className="font-heading text-lg uppercase mb-4">Choice Types:</h3>
              <ul className="font-paragraph text-sm space-y-2 list-disc list-inside">
                <li><strong>ChoiceText:</strong> Text-based options (Size, Material)</li>
                <li><strong>ChoiceColor:</strong> Color swatches</li>
                <li><strong>ChoiceFreeText:</strong> Custom text input</li>
              </ul>
            </div>

            <div className="bg-primary text-primary-foreground border-2 border-primary p-8 rounded-lg">
              <h3 className="font-heading text-lg uppercase mb-4">Example Structure:</h3>
              <pre className="font-mono text-xs overflow-x-auto">
{`<Choice>
  <ChoiceText>Large</ChoiceText>
</Choice>

<Choice>
  <ChoiceColor />
</Choice>

<Choice>
  <ChoiceFreeText 
    placeholder="Enter custom text"
  />
</Choice>`}
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
