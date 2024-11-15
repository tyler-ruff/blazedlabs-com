'use client';

import { Button, Modal, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { HiOutlineClipboard, HiShare } from 'react-icons/hi';

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
  const handleFocus = (event: any) => event.target.select();
  return (
    <>
      <Button color="purple" onClick={() => props.setOpenModal('dismissible')}>
        <HiShare className="w-4 h-4 pt-1" /> 
        <p className="pl-1">Share</p>
      </Button>
      <Modal dismissible show={props.openModal === 'dismissible'} onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header>
            Share on Social
        </Modal.Header>
        <Modal.Body>
          <div className="pt-5 space-x-4 text-center">
            <EmailShareButton className="hover:opacity-75 active:opacity-50" subject='' body='' separator='' url={permalink}><EmailIcon size={32} round={true} /></EmailShareButton>
            <FacebookShareButton className="hover:opacity-75 active:opacity-50" url={permalink}><FacebookIcon size={32} round={true} /></FacebookShareButton>
            <LinkedinShareButton className="hover:opacity-75 active:opacity-50" url={permalink}><LinkedinIcon size={32} round={true} /></LinkedinShareButton>
            <RedditShareButton className="hover:opacity-75 active:opacity-50" url={permalink}><RedditIcon size={32} round={true} /></RedditShareButton>
            <TelegramShareButton className="hover:opacity-75 active:opacity-50" url={permalink}><TelegramIcon size={32} round={true} /></TelegramShareButton>
            <TumblrShareButton className="hover:opacity-75 active:opacity-50" url={permalink}><TumblrIcon size={32} round={true} /></TumblrShareButton>
            <TwitterShareButton className="hover:opacity-75 active:opacity-50" url={permalink}><TwitterIcon size={32} round={true} /></TwitterShareButton>
            <VKShareButton className="hover:opacity-75 active:opacity-50" url={permalink}><VKIcon size={32} round={true} /></VKShareButton>
            <WhatsappShareButton className="hover:opacity-75 active:opacity-50" url={permalink}><WhatsappIcon size={32} round={true} /></WhatsappShareButton>
            <WorkplaceShareButton className="hover:opacity-75 active:opacity-50" url={permalink}><WorkplaceIcon size={32} round={true} /></WorkplaceShareButton>
          </div>
          <div className="mt-10">
            <div className="mb-2 block">
                <Label
                htmlFor="permalink"
                value="Share URL"
                />
            </div>
            <TextInput
                id="permalink"
                value={permalink}
                readOnly
                className="select-all"
                onClick={handleFocus}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}


