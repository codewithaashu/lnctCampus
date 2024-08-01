import React from "react";
import ProfileBoxHeader from "./ProfileBoxHeader";
import { tpoDetails } from "@/db/tpoDetails";

const ProfileBox = () => {
  return (
    <>
      <div className="flex flex-col gap-8 px-5">
        <ProfileBoxHeader />
        <div className="flex flex-col gap-2">
          {/* Peronal Details */}
          <div className="flex flex-col gap-2">
            <h1 className="text-base font-semibold text-sky-700">
              Personal Details
            </h1>
            <div className="px-1">
              {tpoDetails?.personalDetails?.map((curr, index) => {
                return (
                  <div
                    className="grid grid-cols-2 text-card-foreground font-medium"
                    key={index}
                  >
                    <h1 className="text-sm font-medium">{curr.label}</h1>
                    <p>
                      :{" "}
                      <span className="px-2 text-sm font-medium text-wrap">
                        {curr[curr.access]}
                      </span>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Contact Details */}
          <div className="flex flex-col gap-2">
            <h1 className="text-base font-semibold text-sky-700">
              Contact Details
            </h1>
            <div className="px-1">
              {tpoDetails?.contactDetails?.map((curr, index) => {
                return (
                  <div
                    className="grid grid-cols-2 text-card-foreground font-medium"
                    key={index}
                  >
                    <h1 className="text-sm font-medium">{curr.label}</h1>
                    <p>
                      :{" "}
                      <span className="px-2 text-sm font-medium text-wrap">
                        {curr[curr.access]}
                      </span>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileBox;
