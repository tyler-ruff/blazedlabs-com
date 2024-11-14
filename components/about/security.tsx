"use client"

import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

export default function Security(){
    interface ICardItem{
        key?: any;
        title: string;
        description: string;
    };
    const InfoCard = (props: ICardItem) => {
        return (
            <div key={props.key} className="flex flex-col rounded-lg border p-4 md:p-6">
                <h3 className="mb-2 text-lg font-semibold md:text-xl">
                    {props.title}
                </h3>
                <p className="mb-4 text-gray-500">
                    {props.description}
                </p>
            </div>
        );
    };
    const cardList: ICardItem[] = [
        {
            title: 'Encryption at Rest and in Transit',
            description: 'All sensitive data stored within our systems, databases, and cloud services is encrypted at rest using robust encryption algorithms.'
        },
        {
            title: 'Multi-Factor Authentication (MFA)',
            description: 'To prevent unauthorized access to our systems and applications, we implement multi-factor authentication (MFA).'
        },
        {
            title: 'Role-Based Access Control (RBAC)',
            description: 'Our applications and systems are designed with role-based access control, ensuring that users are granted access only to the specific resources and features required for their roles.'
        },
        {
            title: 'Employee Training and Awareness',
            description: 'Our team members undergo regular security training and awareness programs to stay updated on the latest security threats and best practices. '
        },
        {
            title: 'Incident Response and Monitoring',
            description: 'We have a well-defined incident response plan in place. Our systems are equipped with real-time monitoring and alerting mechanisms, enabling us to detect and respond to potential security breaches swiftly.'
        },
        {
            title: 'Data Minimization and Retention Policies',
            description: 'We adhere to data minimization principles, ensuring that we only collect and retain the data necessary for our services.'
        }
    ];
    return (
        <div>
            <div className="mb-5">
                <Breadcrumb className="bg-gray-50 px-5 py-3 border dark:border-transparent dark:bg-gray-900">
                    <Breadcrumb.Item
                        href="/"
                        icon={HiHome}
                    >
                        <span>
                        Home
                        </span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="/about">
                        About
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Data Security
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className=" py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-10 md:mb-16">
                        <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-4xl">
                            Ensuring Data Security
                        </h1>
                        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-md">
                            Our comprehensive approach to data security encompasses a range of top security measures that are implemented across all stages of our development and operational processes.
                        </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
                        {
                            cardList.map((item, index) => {
                                return (
                                    <InfoCard key={`card-${index}`} title={item.title} description={item.description} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}