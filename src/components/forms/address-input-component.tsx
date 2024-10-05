import Autocomplete from "react-google-autocomplete";


export default function AddressInputComponent({ countryCode, onSelect }: {
    countryCode?: string
    onSelect: (place: any) => void
}) {

    return (
        <Autocomplete
            apiKey="AIzaSyAqm2Bw_lQNsjwsJk-4A_vCpH1Mok8o4-k"
            onPlaceSelected={onSelect}
            className=" w-full bg-[#F9FAFB] text-[14px] px-[16px] py-[18px]  rounded-[32px] outline-none placeholder:text-[#98A2B3] font-light h-[56px]"
            options={{
                types: ['geocode', 'establishment'],
                componentRestrictions: { country: countryCode },
            }}

        />
    )
}