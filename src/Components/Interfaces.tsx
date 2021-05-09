import {ChangeEvent} from "react";

// Scope of interfaces, exported for using in whole project
export interface ComponentWithTitle {
    title?: string
}

export interface FormContentProps {
    name?: string,
    email?: string,
    gender?: 'Male' | 'Female',
    isAdult?: boolean
}

export type FormElemChange = <T extends HTMLInputElement | HTMLSelectElement>(e: ChangeEvent<T>, type: string) => void;

export interface StepProps {
    formContent: FormContentProps,
    formElemChange: FormElemChange,
    setFormContent?: (args: FormContentProps) => void
}
