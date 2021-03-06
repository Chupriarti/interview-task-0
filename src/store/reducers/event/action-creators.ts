import { AppDispatch } from "../..";
import USerService from "../../../api/UserService";
import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";
import { EventActionEnum, SetEventsAction, SetGuestsAction } from "./types";

export const EventActionCreators = {
    setGuests: (payload: IUser[]): SetGuestsAction => ({type: EventActionEnum.SET_GUESTS, payload}),
    setEvents: (payload: IEvent[]): SetEventsAction => ({type: EventActionEnum.SET_EVENTS, payload}),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const response = await USerService.getUsers();
            dispatch(EventActionCreators.setGuests(response.data));
        } catch (e) {
            console.warn(e)
        }
    },
    createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem("events") || "[]";
            const json = JSON.parse(events) as IEvent[];
            json.push(event);
            dispatch(EventActionCreators.setEvents(json));
            localStorage.setItem("events", JSON.stringify(json));
        } catch (e) {
            console.warn(e);
        }
    },
    fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem("events") || "[]";
            const json = JSON.parse(events) as IEvent[];
            const currentUserEvents = json.filter(event => event.guest === username || event.author === username);
            dispatch(EventActionCreators.setEvents(currentUserEvents));
        } catch (e) {
            console.warn(e);
        }
    }
}