import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Option, OptionName } from '@/components/ui/store/Option';

export default function TestOptionPage() {
  const [selectedSize, setSelectedSize] = React.useState('M');

  return (
    <div className="min-h-screen bg-background text-primary py-12 px-4 md:px-8">
      <div className="max-w-[120rem] mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 mb-8 hover:text-primary-foreground">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="font-heading text-5xl md:text-6xl uppercase mb-8">Test Option Component</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
          {/* Option Example */}
          <div className="bg-white border-2 border-primary p-8 rounded-lg">
            <h2 className="font-heading text-2xl uppercase mb-6">Option Component Example</h2>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="font-heading text-lg uppercase">Size</h3>
                <div className="flex gap-3">
                  {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border-2 transition-all ${
                        selectedSize === size
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-primary/20 hover:border-primary'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <p className="font-paragraph text-sm text-primary/60">Selected: {selectedSize}</p>
              </div>

              <div className="space-y-3">
                <h3 className="font-heading text-lg uppercase">Color</h3>
                <div className="flex gap-3">
                  {[
                    { name: 'Black', color: '#000000' },
                    { name: 'White', color: '#FFFFFF' },
                    { name: 'Navy', color: '#004D25' },
                    { name: 'Gray', color: '#999999' },
                  ].map((item) => (
                    <button
                      key={item.name}
                      className="w-10 h-10 rounded-full border-4 border-primary/20 hover:border-primary transition-all"
                      style={{ backgroundColor: item.color }}
                      title={item.name}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-heading text-lg uppercase">Material</h3>
                <div className="flex gap-3 flex-wrap">
                  {['Cotton', 'Polyester', 'Wool', 'Silk'].map((material) => (
                    <button
                      key={material}
                      className="px-4 py-2 border-2 border-primary/20 hover:border-primary transition-all"
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>
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
