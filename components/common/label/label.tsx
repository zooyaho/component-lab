interface LabelPropsType {
  text: string; className?: string; isRequired?: boolean, htmlFor: string
}

export default function Label({ text, className, isRequired, htmlFor }: LabelPropsType) {
  return (<label className={`w-fit label-s text-gray-800 ${className}`} htmlFor={htmlFor}>{text}{isRequired && <i className="text-lime-600">&nbsp;*</i>}</label>);
}