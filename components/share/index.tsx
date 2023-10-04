'use client';

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { HiShare } from 'react-icons/hi';

import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    RedditIcon,
    RedditShareButton,
    TelegramIcon,
    TelegramShareButton,
    TumblrIcon,
    TumblrShareButton,
    TwitterIcon,
    TwitterShareButton,
    VKIcon,
    VKShareButton,
    WhatsappIcon,
    WhatsappShareButton,
    WorkplaceIcon,
    WorkplaceShareButton
  } from "react-share";

export default function SocialShare() {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };
  const permalink = window.location.href;
  return (
    <>
      <Button onClick={() => props.setOpenModal('dismissible')}>
        <HiShare className="w-4 h-4 pt-1" /> 
        <span className="pl-1">Share</span>
      </Button>
      <Modal dismissible show={props.openModal === 'dismissible'} onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header>
            Share on Social
        </Modal.Header>
        <Modal.Body>
          <div className="space-x-4 text-center">
            <EmailShareButton subject='' body='' separator='' children={<EmailIcon size={32} round={true} />} url={permalink} />
            <FacebookShareButton children={<FacebookIcon size={32} round={true} />} url={permalink} />
            <LinkedinShareButton children={<LinkedinIcon size={32} round={true} />} url={permalink} />
            <RedditShareButton children={<RedditIcon size={32} round={true} />} url={permalink} />
            <TelegramShareButton children={<TelegramIcon size={32} round={true} />} url={permalink} />
            <TumblrShareButton children={<TumblrIcon size={32} round={true} />} url={permalink} />
            <TwitterShareButton children={<TwitterIcon size={32} round={true} />} url={permalink} />
            <VKShareButton children={<VKIcon size={32} round={true} />} url={permalink} />
            <WhatsappShareButton children={<WhatsappIcon size={32} round={true} />} url={permalink} />
            <WorkplaceShareButton children={<WorkplaceIcon size={32} round={true} />} url={permalink} />
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}


