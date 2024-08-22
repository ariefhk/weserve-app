"use client"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/cn"
import { Check, ChevronsUpDown } from "lucide-react"
import * as React from "react"

interface ComboboxProps<T> {
  datas: T[]
  labelKey: keyof T // Key to display as the label
  valueKey: keyof T // Key to use as the value
  onSelect?: (value: T) => void // Callback when an item is selected
  placeholder?: string // Placeholder text
  notFoundText?: string // Text to display when no item is found
}

const Combobox: React.FC<ComboboxProps<any>> = ({
  datas,
  labelKey,
  valueKey,
  ...props
}) => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState<string | number>("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between">
          {value
            ? datas.find((item) => item[valueKey] === value)?.[labelKey]
            : (props?.placeholder ?? "Select item...")}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        avoidCollisions={false}
        className="w-[--radix-popover-trigger-width] max-h-[--radix-popover-content-available-height] p-0">
        <Command>
          <CommandInput placeholder={props?.placeholder ?? "Search item..."} />
          <CommandList>
            <CommandEmpty>
              {props?.notFoundText ?? "No item found."}
            </CommandEmpty>
            <CommandGroup>
              {datas.map((item) => (
                <CommandItem
                  key={item[valueKey] as React.Key}
                  value={item[valueKey] as string}
                  onSelect={(currentValue) => {
                    props.onSelect?.(item)
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}>
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === item[valueKey] ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {item[labelKey]}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export { Combobox }
