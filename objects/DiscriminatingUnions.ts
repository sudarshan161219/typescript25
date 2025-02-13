//* Discriminating Unions

// type NetworkLoadingState = {
//   state: "loading";
// };

// type NetworkFailedState = {
//   state: "failed";
//   code: number;
// };

// type NetworkSuccessState = {
//   state: "success";
//   response: {
//     title: string;
//     duration: number;
//     summary: string;
//   };
// };

// type NetWorkState =
//   | NetworkLoadingState
//   | NetworkFailedState
//   | NetworkSuccessState;

// function logger(state: NetWorkState) {
//   switch (state.state) {
//     case "loading":
//       return "Loading....";
//     case "failed":
//       return `Error ${state.code}`;
//       case "success":
//          return  `Downloading ${state.response.title}`;
//   }
// }
