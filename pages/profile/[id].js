import { authOptions } from './../api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"

import { Layout } from "../../components/Layout";

import { PrismicText, PrismicRichText, PrismicLink, SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio";

import useSWR from 'swr';
import { Loading } from '../../components/Loading';

export async function getServerSideProps(context) {
  const client = createClient();
  const session = await getServerSession(context.req, context.res, authOptions)
  
  const navigation = await client.getSingle("navigation", { lang: context.locale });
  const settings = await client.getSingle("settings", { lang: context.locale });
  
  // Redirect user to /profile if its their profile
  if(session){
    if (context.params.id === session.user.id) {
        return {
            redirect: {
                destination: '/profile',
                permanent: false,
            },
        }
    }
 }
 
 
  return {
    props: {
        user: context.params.id, 
        navigation: navigation,
        settings: settings 
    },
  }
}
 
const Profile = ({ user, navigation, settings }) => {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR(`${process.env.SITE_URL}api/profile/${user}`, fetcher);

    if(error){
        return (
            <div>
                Error
            </div>
        );
    }

    if(isLoading){
        return (
            <div>
                <Loading />
            </div>
        );
    }

  // Show the user. No loading state is required
  return !isLoading && (
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
                        {data.name}'s Profile
                    </li>
                </ul>
            </div>
        </div>

        <div className="text-center py-3">
            <div className="avatar">
                <div className="w-24 dark:bg-white text-center rounded-full border">
                    <img src={user.image} />
                </div>
            </div>
            <h1 className="text-center py-3 text-xl">
                {user.name}
            </h1>
        </div>
    </Layout>
  )
}
 
export default Profile