import { PrismicLink } from "@prismicio/react";

export const Breadcrumb = ({ items }) => {
    return (
        <div className="text-sm breadcrumbs inline-flex">
            <ul>
                {
                    items.map((item, index) => (
                        item.href ? (
                            <li key={index}>
                                <PrismicLink href={item.href}>
                                    {item.label}
                                </PrismicLink>
                            </li> 
                        ) : (
                            <li key={index}>
                                {item.label}
                            </li>
                        )
                    ))
                }
            </ul>
        </div>
    );
} 