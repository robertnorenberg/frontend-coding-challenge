import Image from "next/image"
import React from 'react';

const RichElem = ({ elem }) => {
  switch (elem.type) {
    case "paragraph": return <p><RichContent content={elem.content}/></p>
    case "text": 
      if (elem.marks?.[0]?.type === "bold") return <b>{elem.text}</b>
      return <>{elem.text}</>;
    case "hard_break": return <br />
    case "heading":
      if (elem.attrs?.level === 2) return <h2 className="mb-8 font-normal text-2xl text-gray-700"><RichContent content={elem.content}/></h2>
    default: return <div>xx<RichContent content={elem.content}/></div>
  }
}

const RichContent = ({ content }) => {
  return content?.map((elem) => {
    return <RichElem elem={elem}/>;
  });
}

const LinkButton = ({ children, url }) => {
  return <a href={url} className="bg-amber-500 rounded-full px-4 py-2 inline-block 
  shadow-[inset_0_0_0_2px_rgba(255,255,255,1)] 
  border border-solid border-amber-500
  hover:bg-amber-400
  font-semibold">
    { children }
  </a>;
}

export const ImageTextSection: React.FC = ({ section }) => {
  const contentBody = section?.story?.content?.body?.[0]; // assuming just one for now
  const img = contentBody?.image;
  const text = contentBody?.text;
  const headline = contentBody?.headline;
  const buttons = contentBody?.button || [];
  
  return <section className="md:flex max-w-screen-2xl text-gray-700">

    <div className="min-w-[300px] max-w-[500px] mx-auto order-last mb-8 lg:min-w-[500px]">
      <Image src={img.filename} alt={img.title} width={500} height={500} className="w-full rounded-t-lg" />
    </div>

    <div className="md:mr-8">
      <RichContent content={headline.content} />
      <RichContent content={text.content} />

      <div className="mt-8">
      { buttons.map((it) => (
        <LinkButton url={it.link.url}>{it.label}</LinkButton>      
      ))}
    </div>
    
    </div>
  </section>
};