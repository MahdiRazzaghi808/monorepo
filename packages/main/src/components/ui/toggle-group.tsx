'use client';

import * as React from 'react';
import { cn } from '@repo/main/utils/cn';
import { toggleVariants } from './toggle';
import { type VariantProps } from 'class-variance-authority';
import * as TogglePrimitive from '@radix-ui/react-toggle';

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: 'md',
  variant: 'default',
});

function ToggleGroup({
  className,
  variant,
  size,
  children,
}: VariantProps<typeof toggleVariants> & { className?: string; children: React.ReactNode }) {
  return (
    <ToggleGroupContext.Provider value={{ variant, size }}>
      <div className={cn('inline-flex gap-1', className)}>{children}</div>
    </ToggleGroupContext.Provider>
  );
}

function ToggleGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root>) {
  const context = React.useContext(ToggleGroupContext);

  return (
    <TogglePrimitive.Root
      className={cn(
        toggleVariants({ variant: context.variant, size: context.size }),
        className
      )}
      {...props}
    />
  );
}

export { ToggleGroup, ToggleGroupItem };
