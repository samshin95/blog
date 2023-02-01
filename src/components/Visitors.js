import swal from "sweetalert2";

export function firstvisit() {
  swal.fire(
    "本網站還在測試階段!",
    "網站中的部分(絕大部分)條目尚未完成，如有不便敬請見諒",
    "success"
  );
}

export function oldvisit(visit) {
  swal.fire(
    "歡迎您的再次造訪!",
    "歡迎，然而不幸的是網站中的部分(絕大部分)條目還是處於施工階段，如有不便敬請見諒",
    "success"
  );
}
