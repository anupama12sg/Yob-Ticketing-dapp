'use client';
import React from 'react';
import Link from 'next/link';
import { useGlobalState } from '../store';
import EventCard from './cards/EventCard';
import { useReadAllEvents } from '@/hooks/useReadAllEvent';

const Events = () => {
  const getEvents = useReadAllEvents();
  return (
    <>
      <div className='mx-4 sm:mx-0 grid grid-cols-1  gap-2 sm:grid-cols-2 sm:gap-4'>
        {getEvents?.map(
          (
            item: {
              eventId: any;
              eventDate?: any;
              owner?: any;
              eventName?: any;
              numSilverTickets?: any;
              numVipTickets?: any;
              sellingDuration?: any;
              silverTicketPrice?: any;
              vipTicketPrice?: any;
              vipTickets:any[];
              silverTickets:any[];
              eventVenue: string;
            },
            i: number
          ) => {
            const {
              eventId,
              eventDate,
              owner,
              eventName,
              numSilverTickets,
              numVipTickets,
              sellingDuration,
              silverTicketPrice,
              vipTicketPrice,
              vipTickets,
              silverTickets,
              eventVenue
            } = item;
            return (
              <Link href={`/eventdetails/${item.eventId}`} key={i}>
                <EventCard
                  eventDate={eventDate}
                  eventId={eventId}
                  owner={owner}
                  eventName={eventName}
                  numSilverTickets={numSilverTickets}
                  numVipTickets={numVipTickets}
                  silverTicketPrice={silverTicketPrice}
                  vipTicketPrice={vipTicketPrice}
                  vipTickets={vipTickets}
                  silverTickets={silverTickets}
                  sellingDuration={sellingDuration} 
                  eventVenue={eventVenue}
                />
              </Link>
            );
          }
        )}
      </div>
    </>
  );
};

export default Events;
