'use client';

import { useEffect, useState } from 'react';

import { Accordion, Button } from 'flowbite-react';
import Loading from '@/app/loading';

import { HiQuestionMarkCircle, HiOutlineChat } from 'react-icons/hi';
import Link from 'next/link';

export default function FaqAccordion(){

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <><Loading /></>;

  return (
    <Accordion>
        <Accordion.Panel>
          <Accordion.Title>
            What is Blazed Labs?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Blazed Labs is a company founded in 2020 by <a href="https://tyler-ruff.com/" target="founder">Tyler Ruff</a>.
              We build software, administrate networked systems, and publish media on behalf of our <a href="https://blazed.city/" target="team">team of creatives</a>.
              <br /><br />
              In addition to our <a href="/services">core services</a>, we also offer a range of value-added services and resources to help our clients stay ahead of the curve. These include training and development opportunities, access to industry-leading tools and technologies, and ongoing support and maintenance to ensure that our clients have the resources they need to succeed.
            </p>
            <Link href="/about" className="inline-flex mt-5 hover:no-underline">
              <Button gradientMonochrome="info">
                <p>
                  Learn More
                </p>
                <HiQuestionMarkCircle className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Do you work with startups and large enterprises?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            Yes, we work with businesses of all sizes. Whether you're a startup looking to build your first app or a large enterprise in need of a complex software solution, we have the expertise to assist you.
            </p>
            <Link href="https://blazed.contact/" className="inline-flex mt-5 hover:no-underline">
              <Button gradientMonochrome="teal">
                <HiOutlineChat className="mr-2 h-5 w-5" />
                <p>
                  Contact Us
                </p>
              </Button>
            </Link>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Can you help us migrate to the cloud?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Absolutely! We specialize in cloud migration and can help your business seamlessly transition to cloud-based solutions. Our team will ensure a smooth migration process while optimizing costs and performance.
            </p>
            <Link href="https://blazed.contact/" className="inline-flex mt-5 hover:no-underline">
              <Button gradientMonochrome="teal">
                <HiOutlineChat className="mr-2 h-5 w-5" />
                <p>
                  Contact Us
                </p>
              </Button>
            </Link>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What industries do you serve?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              We serve a diverse range of industries, including e-commerce, finance, education, logistics, and more. Our experience in various sectors allows us to tailor our solutions to meet industry-specific challenges.
            </p>
            <Link href="/about" className="inline-flex mt-5 hover:no-underline">
              <Button gradientMonochrome="info">
                <p>
                  Learn More
                </p>
                <HiQuestionMarkCircle className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            How do you ensure data security?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Data security is a top priority for us. We follow best practices, implement robust encryption, and comply with industry standards to keep your data safe and secure.
            </p>
            <Link href="/about/data-security" className="inline-flex mt-5 hover:no-underline">
              <Button gradientMonochrome="failure">
                <p>
                  Discover How
                </p>
                <HiQuestionMarkCircle className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            How do we get started with Blazed Labs?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Getting started is easy! Simply reach out to us through our contact form or give us a call. 
              <br /><br />
              We'll schedule a consultation to discuss your project requirements and determine the best way forward.
              <br /><br />
              You can also sign up for an account to interact with the community.
            </p>
            <Link href="https://blazed.contact/" className="inline-flex mt-5 hover:no-underline">
              <Button gradientMonochrome="teal">
                <HiOutlineChat className="mr-2 h-5 w-5" />
                <p>
                  Contact Us
                </p>
              </Button>
            </Link>
          </Accordion.Content>
        </Accordion.Panel>
    </Accordion>
  )
}
