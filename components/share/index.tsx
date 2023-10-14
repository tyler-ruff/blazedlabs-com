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
            <EmailShareButton className="hover:opacity-75 active:opacity-50" subject='' body='' separator='' children={<EmailIcon size={32} round={true} />} url={permalink} />
            <FacebookShareButton className="hover:opacity-75 active:opacity-50" children={<FacebookIcon size={32} round={true} />} url={permalink} />
            <LinkedinShareButton className="hover:opacity-75 active:opacity-50" children={<LinkedinIcon size={32} round={true} />} url={permalink} />
            <RedditShareButton className="hover:opacity-75 active:opacity-50" children={<RedditIcon size={32} round={true} />} url={permalink} />
            <TelegramShareButton className="hover:opacity-75 active:opacity-50" children={<TelegramIcon size={32} round={true} />} url={permalink} />
            <TumblrShareButton className="hover:opacity-75 active:opacity-50" children={<TumblrIcon size={32} round={true} />} url={permalink} />
            <TwitterShareButton className="hover:opacity-75 active:opacity-50" children={<TwitterIcon size={32} round={true} />} url={permalink} />
            <VKShareButton className="hover:opacity-75 active:opacity-50" children={<VKIcon size={32} round={true} />} url={permalink} />
            <WhatsappShareButton className="hover:opacity-75 active:opacity-50" children={<WhatsappIcon size={32} round={true} />} url={permalink} />
            <WorkplaceShareButton className="hover:opacity-75 active:opacity-50" children={<WorkplaceIcon size={32} round={true} />} url={permalink} />
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


