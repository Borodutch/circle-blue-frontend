import classnames, {
  backgroundColor,
  borderRadius,
  cursor,
  display,
  fontWeight,
  padding,
  textColor,
} from 'classnames/tailwind'

const button = (disabled?: boolean) =>
  classnames(
    display('flex'),
    padding('px-4', 'py-2'),
    borderRadius('rounded'),
    backgroundColor({
      'bg-blue-700': !disabled,
      'hover:bg-blue-600': !disabled,
      'active:bg-blue-500': !disabled,
      'bg-gray-500': disabled,
    }),
    textColor('text-white'),
    fontWeight('font-bold'),
    cursor(disabled ? 'cursor-not-allowed' : 'cursor-pointer')
  )
export default function ({
  onClick,
  title,
  disabled,
}: {
  onClick: () => void
  title: string
  disabled?: boolean
}) {
  return (
    <button
      className={button(disabled)}
      disabled={disabled}
      onClick={() => {
        if (!disabled) {
          onClick()
        }
      }}
    >
      {title}
    </button>
  )
}
