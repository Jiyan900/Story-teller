import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

interface CharacterCustomizerProps {
  animal: string;
  onCustomizationChange: (customization: CharacterCustomization) => void;
}

export interface CharacterCustomization {
  size: number;  // 1-10 scale
  color: string;
  hasAccessory: boolean;
  accessoryType: string;
  personality: string;
}

const colorOptions = {
  Lion: ['Golden', 'Brown', 'White'],
  Elephant: ['Grey', 'White', 'Pink'],
  Giraffe: ['Yellow', 'Orange', 'Light Brown'],
  Penguin: ['Black', 'Blue', 'Emperor'],
  Rabbit: ['White', 'Brown', 'Grey', 'Spotted'],
  Bear: ['Brown', 'Black', 'Polar White'],
  Fox: ['Red', 'Arctic White', 'Grey'],
  Owl: ['Brown', 'White', 'Grey'],
  Turtle: ['Green', 'Brown', 'Blue'],
  Monkey: ['Brown', 'Golden', 'Black']
};

const accessoryOptions = {
  Lion: ['Crown', 'Bow Tie', 'Scarf'],
  Elephant: ['Hat', 'Glasses', 'Bowtie'],
  Giraffe: ['Scarf', 'Glasses', 'Bowtie'],
  Penguin: ['Scarf', 'Top Hat', 'Bowtie'],
  Rabbit: ['Carrot', 'Glasses', 'Backpack'],
  Bear: ['Honey Pot', 'Hat', 'Scarf'],
  Fox: ['Glasses', 'Scarf', 'Backpack'],
  Owl: ['Glasses', 'Wizard Hat', 'Book'],
  Turtle: ['Shell Decorations', 'Hat', 'Scarf'],
  Monkey: ['Hat', 'Glasses', 'Banana']
};

const personalityOptions = [
  'Playful',
  'Wise',
  'Brave',
  'Gentle',
  'Curious',
  'Helpful'
];

export function CharacterCustomizer({ animal, onCustomizationChange }: CharacterCustomizerProps) {
  const [customization, setCustomization] = useState<CharacterCustomization>({
    size: 5,
    color: colorOptions[animal as keyof typeof colorOptions]?.[0] || 'Brown',
    hasAccessory: false,
    accessoryType: accessoryOptions[animal as keyof typeof accessoryOptions]?.[0] || 'None',
    personality: 'Playful'
  });

  const handleCustomizationChange = (changes: Partial<CharacterCustomization>) => {
    const newCustomization = { ...customization, ...changes };
    setCustomization(newCustomization);
    onCustomizationChange(newCustomization);
  };

  return (
    <Card className="w-full max-w-md mx-auto mb-6 bg-white/90 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-center text-primary">
          Customize Your {animal}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Size Slider */}
        <div className="space-y-2">
          <Label>Size</Label>
          <Slider
            value={[customization.size]}
            min={1}
            max={10}
            step={1}
            onValueChange={([size]) => handleCustomizationChange({ size })}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Small</span>
            <span>Medium</span>
            <span>Large</span>
          </div>
        </div>

        {/* Color Selection */}
        <div className="space-y-2">
          <Label>Color</Label>
          <Select
            value={customization.color}
            onValueChange={(color) => handleCustomizationChange({ color })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a color" />
            </SelectTrigger>
            <SelectContent>
              {colorOptions[animal as keyof typeof colorOptions]?.map((color) => (
                <SelectItem key={color} value={color}>
                  {color}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Accessory Toggle and Selection */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Add Accessory</Label>
            <Switch
              checked={customization.hasAccessory}
              onCheckedChange={(hasAccessory) => handleCustomizationChange({ hasAccessory })}
            />
          </div>

          {customization.hasAccessory && (
            <Select
              value={customization.accessoryType}
              onValueChange={(accessoryType) => handleCustomizationChange({ accessoryType })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select an accessory" />
              </SelectTrigger>
              <SelectContent>
                {accessoryOptions[animal as keyof typeof accessoryOptions]?.map((accessory) => (
                  <SelectItem key={accessory} value={accessory}>
                    {accessory}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>

        {/* Personality Selection */}
        <div className="space-y-2">
          <Label>Personality</Label>
          <Select
            value={customization.personality}
            onValueChange={(personality) => handleCustomizationChange({ personality })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a personality" />
            </SelectTrigger>
            <SelectContent>
              {personalityOptions.map((personality) => (
                <SelectItem key={personality} value={personality}>
                  {personality}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Preview Section */}
        <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/10">
          <h3 className="text-sm font-medium mb-2">Preview:</h3>
          <p className="text-sm text-muted-foreground">
            A {customization.size > 7 ? 'big' : customization.size < 4 ? 'small' : 'medium-sized'}{' '}
            {customization.color.toLowerCase()} {animal.toLowerCase()}{' '}
            {customization.hasAccessory && `wearing a ${customization.accessoryType.toLowerCase()}`}{' '}
            with a {customization.personality.toLowerCase()} personality
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
