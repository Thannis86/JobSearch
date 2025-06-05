"use client";

import { Select } from "radix-ui";
import React from "react";
import classnames from "classnames";

import { ChevronDownIcon, CheckIcon } from "@radix-ui/react-icons";

import "./JobSelect.css";
import handleChange from "./HandleChange";

export default function JobSelect({ job }) {
  return (
    <Select.Root onValueChange={(newValue) => handleChange(newValue, job.id)}>
      <Select.Trigger className="SelectTrigger" aria-label="Stage">
        <Select.Value placeholder={job.stage || "Select Stage"}></Select.Value>
        <Select.Icon className="SelectIcon">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="SelectContent">
          <Select.ScrollUpButton className="SelectScrollButton" />
          <Select.Viewport className="SelectViewport">
            <Select.Group>
              <Select.Label className="SelectLabel">Status</Select.Label>
              <SelectItem value="Applied">Applied</SelectItem>
              <SelectItem value="Callback">Callback</SelectItem>
              <SelectItem value="Ignored">Ignored</SelectItem>
              <SelectItem value="Interview">Interview</SelectItem>
              <SelectItem value="Offer">Offer</SelectItem>
              <SelectItem value="Rejected">Rejected</SelectItem>
              <input type="hidden" name="id" value={job.id}></input>
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classnames("SelectItem", className)}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="SelectItemIndicator">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);
