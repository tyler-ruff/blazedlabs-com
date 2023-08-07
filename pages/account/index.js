import { authOptions } from './../api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"

import { useState, useEffect } from "react";

import { PrismicText, PrismicRichText, PrismicLink, SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { Layout } from "../../components/Layout";

import { createClient } from "../../prismicio";


export async function getServerSideProps(context) {
  const client = createClient();
  const session = await getServerSession(context.req, context.res, authOptions);
  
  const navigation = await client.getSingle("navigation", { lang: context.locale });
  const settings = await client.getSingle("settings", { lang: context.locale });
  
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
 
  return {
    props: { 
        user: session.user, 
        navigation: navigation,
        settings: settings 
    },
  }
}
 
const Profile = ({ user, navigation, settings }) => {

  // Show the user. No loading state is required
  return (
    <Layout navigation={navigation} settings={settings}>
        
        <div className=" text-center">
            <div className="text-sm breadcrumbs inline-flex">
                <ul>
                    <li>
                        <PrismicLink href="/">
                            Home
                        </PrismicLink>
                    </li> 
                    <li>
                        My Account
                    </li>
                </ul>
            </div>
        </div>

        <div>
            <div className="text-center py-3">

            </div>
        </div>
    </Layout>
  )
}
 
export default Profile