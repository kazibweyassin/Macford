import { cn } from '@/lib/utils'

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
  action?: React.ReactNode
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className,
  action,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12 lg:mb-16',
        align === 'center' && 'text-center max-w-2xl mx-auto',
        align === 'left' && action && 'flex flex-col md:flex-row md:items-end md:justify-between gap-6',
        className
      )}
    >
      <div className={cn(align === 'left' && action && 'max-w-2xl')}>
        {eyebrow && (
          <p
            className={cn(
              'eyebrow mb-3',
              light ? 'text-accent' : 'text-accent'
            )}
          >
            {eyebrow}
          </p>
        )}
        <h2
          className={cn(
            'font-display text-3xl sm:text-4xl lg:text-[2.75rem] text-balance',
            light ? 'text-primary-foreground' : 'text-foreground'
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              'mt-4 text-base sm:text-lg leading-relaxed font-light max-w-xl',
              align === 'center' && 'mx-auto',
              light ? 'text-primary-foreground/70' : 'text-muted-foreground'
            )}
          >
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
