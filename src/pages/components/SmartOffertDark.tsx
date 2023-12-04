import Text from "@/pages/components/global/Text";
import macbook from "../../images/macbook-frame.png";
import website from "../../images/website-mockup.png";

export interface SmartOffertDarkProps {
  subHeading: string;
  title: string;
  text: string;
  btnText: string;
  btnUrl: string;
  btnType: string;
  gradientColor: string;
}

const SmartOffertDark = (props: SmartOffertDarkProps) => {
  return (
    <section className="py-16 lg:py-32 relative overflow-hidden z-10">
      <div className="absolute right-0 top-0 opacity-40 z-[-1] light-gradient">
        <svg
          width="860"
          height="814"
          viewBox="0 0 860 814"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.81"
            d="M1149.76 532.925C961.222 567.305 770.1 586.169 661.776 588.816C676.999 589.621 795.523 572.243 954.426 538.857C1096.55 509.071 1158.32 475.538 1125.72 453.494C1012.62 462.931 853.74 509.405 692.35 601.925C549.652 727.193 452.255 870.257 399.891 995.221C387.103 1062.59 399.215 1050.39 418.187 955.484C457.954 759.313 457.712 775.268 405.705 1014.76C363.808 1120.06 302.213 1107.99 222.895 991.768C143.68 826.147 48.743 684.087 -54.277 617.284C-145.848 642.269 -226.95 734.747 -278.741 847.878C-290.955 948.851 -253.713 995.828 -165.916 982.049C-59.4535 915.601 49.7375 813.843 119.225 701.821C108.196 585.813 8.84827 487.005 -163.965 409.729C-353.583 345.238 -495.95 297.456 -527.34 259.467C-435.196 226.164 -252.565 194.024 -64.0435 159.644C30.179 125.264 -9.04001 90.2671 -151.649 58.7331C-401.192 24.4998 -343.817 60.8047 -86.8277 144.913C72.5345 203.953 171.87 256.349 204.943 277.745C176.88 246.483 113.806 158.744 43.8853 21.9888C-77.5202 -193.11 -1.3135 121.487 61.5185 18.7978C103.415 -148.33 143.373 -286.111 185.27 -329.813C232.611 -265.322 291.873 -121.546 370.885 37.7035C464.584 157.823 583.491 200.877 722.529 169.322C857.029 80.1708 980.245 -22.1316 1063.22 -102.327C1085.06 -149.805 1035.4 -146.939 919.67 -103.394C784.303 -28.3672 665.843 61.7777 620.058 151.138C681.551 244.097 838.121 324.031 1037.48 388.072C1196.26 450.271 1243.98 498.535 1149.76 532.925Z"
            stroke="url(#paint0_linear_5_52)"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            opacity="0.25"
            d="M1106.41 362.711C932.637 394.632 750.592 409.729 631.597 409.928C615.022 411.466 695.831 401.872 831.504 387.925C979.315 385.519 1079.54 393.324 1106.02 423.644C1058.68 482.391 949.786 573.279 811.117 692.583C660.794 817.704 529.303 933.513 428.782 1009.45C356.171 1023.87 313.739 968.835 290.432 856.059C283.522 731.723 279.289 635.342 268.273 612.953C260.457 683.627 238.744 824.274 199.843 979.193C160.943 1080.47 106.679 1081.21 41.1313 987.719C-21.2289 839.236 -87.7712 693.367 -148.283 598.755C-192.385 578.876 -214.009 628.845 -201.361 718.886C-160.816 824.965 -85.1829 905.924 14.1523 943.662C101.834 938.452 164.59 890.01 171.424 814.931C104.435 720.005 -30.6894 623.823 -206.996 537.33C-371.191 453.18 -474.147 384.127 -472.592 329.649C-368.603 277.881 -194.45 236.554 -20.6934 204.633C71.2851 172.701 48.5008 151.692 -69.5259 143.239C-237.737 137.505 -381.429 148.491 -450.177 177.305C-428.642 208.472 -322.422 252.08 -169.601 297.801C-3.41717 323.685 134.767 326.312 225.267 289.693C264.856 210.115 259.271 91.3134 227.473 -47.9948C172.941 -171.285 121.533 -249.9 85.1061 -253.436C51.3441 -182.239 38.7471 -54.5548 46.0401 81.6042C56.4568 162.793 82.0333 155.605 120.934 54.3703C159.847 -100.537 210.235 -234.74 273.181 -293.121C339.252 -258.427 422.637 -143.884 523.821 3.83639C627.67 140.027 743.146 223.706 857.641 242.538C949.39 199.851 1010.83 121.895 1022.24 38.6347C982.719 -38.8297 890.677 -83.8917 764.987 -93.4439C652.672 -74.5696 581.349 -29.811 588.336 27.9106C685.593 97.1724 851.432 164.854 1034.68 223.518C1167.71 283.53 1198.39 330.779 1106.41 362.711Z"
            stroke="url(#paint1_linear_5_52)"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            opacity="0.13"
            d="M1063.06 210.335C903.975 239.808 732.691 259.519 607.397 272.252C563.881 288.029 607.219 303.053 711.718 324.303C848.538 357.981 967.355 408.453 1037.72 481.313C1052.07 570.255 1004.59 677.496 913.142 791.558C790.666 889.989 661.712 960.768 543.698 983.158C435.463 952.22 350.612 869.19 287.13 753.705C236.946 648.305 199.295 581.869 167.038 585.394C138.784 666.165 108.26 801.006 72.3433 943.62C36.4266 1040.27 -3.16219 1052.03 -42.6489 980.437C-78.1194 852.429 -105.787 711.269 -117.848 599.351C-116.599 541.818 -90.8822 547.018 -38.008 600.481C24.6583 687.937 102.064 776.23 177.467 843.651C221.85 886.798 226.746 892.49 175.006 866.919C67.2433 816.846 -83.7677 751.518 -246.917 682.685C-377.732 607.523 -441.507 539.454 -411.851 483.05C-300.416 426.636 -136.412 382.966 22.6566 353.483C111.652 324.02 103.415 310.147 9.63882 310.984C-139.001 311.79 -283.662 326.249 -378.93 350.354C-405.578 368.12 -353.481 384.922 -243.551 389.578C-98.188 369.741 48.7048 321.76 172.507 239.996C266.067 133.948 319.744 10.7102 340.948 -107.411C333.744 -191.572 313.127 -223.21 292.077 -187.293C263.785 -96.9908 247.197 27.3769 246.955 144.034C246.7 204.266 263.989 186.553 299.905 89.9427C335.809 -52.6716 388.645 -181.559 456.641 -250.967C524.611 -243.141 606.517 -159.944 697.055 -32.9498C780.338 104.13 860.089 213.589 922.641 275.223C956.798 283.53 954.682 247.696 908.182 187.882C831.44 112.448 727.132 47.5068 619.153 3.98278C546.618 -23.4499 526.728 -25.3959 579.691 -8.01771C701.288 21.8109 866.401 60.3966 1028.91 100.196C1136.53 143.04 1152.05 180.862 1063.06 210.335Z"
            stroke="url(#paint2_linear_5_52)"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            opacity="0.07"
            d="M1019.71 158.723C875.249 185.737 716.154 213.599 588.782 244.087C523.91 277.41 532.478 318.475 601.557 371.122C714.204 431.554 832.014 507.271 926.249 597.039C987.168 688.324 997.649 781.891 963.033 864.283C891.518 919.849 796.403 940.387 693.969 915.769C584.982 853.496 486.017 759.114 402.211 654.342C324.028 574.189 260.763 537.539 210.209 563.13C162.422 650.325 122.668 777.789 89.747 908.047C56.8265 999.469 32.3082 1020.38 18.0027 969.316C6.47674 863.833 9.85548 734.621 30.9822 616.227C57.7445 531.68 102.497 496.62 160.752 508.254C212.44 560.598 260.291 631.942 288.66 702.867C280.13 769.503 230.634 812.839 135.417 830.499C6.91024 829.014 -140.429 806.708 -277.185 771.711C-370.4 726.837 -397.698 679.39 -345.525 635.646C-230.852 589.925 -78.451 552.207 66.0065 525.193C151.278 498.179 155.588 483.144 85.0805 477.913C-40.7747 470.715 -177.544 469.02 -287.181 467.074C-350.931 455.272 -349.529 433.092 -290.216 392.958C-185.806 333.667 -58.4845 251.546 68.939 149.516C188.853 43.1858 283.955 -60.1837 351.849 -140.672C396.984 -180.44 421.527 -169.611 434.532 -104.879C436.164 -6.31228 438.064 107.53 446.925 202.592C453.53 243.25 472.03 216.895 504.938 125.505C537.858 -4.75335 583.656 -126.746 639.132 -203.541C692.35 -218.722 750.337 -166.713 805.761 -66.7646C849.8 57.8019 879.469 176.415 885.079 266.822C867.918 319.563 820.08 331.062 743.312 310.911C659.034 263.913 570.728 209.142 500.603 159.487C475.562 111.349 503.688 80.1184 591.574 66.4963C725.322 60.6686 880.846 68.7352 1019.4 86.375C1102.62 106.819 1104.98 131.709 1019.71 158.723Z"
            stroke="url(#paint3_linear_5_52)"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            opacity="0.18"
            d="M976.318 235.968C846.345 260.523 700.676 294.024 575.203 336.439C495.031 380.183 473.599 434.849 506.863 500.177C586.78 566.74 687.097 641.63 784.354 719.314C896.567 817.024 901.884 882.038 816.051 813.958C736.924 737.54 654.394 647.573 576.759 563.727C497.097 511.906 427.953 502.762 371.701 545.857C316.098 635.928 272.837 754.615 242.913 872.485C212.989 958.111 197.803 986.223 196.975 953.789C196.783 871.607 211.484 759.909 239.279 645.114C265.06 546.014 298.299 480.487 331.309 453.243C348.623 463.81 350.446 501.841 326.209 553.515C270.67 616.018 182.414 671.229 65.4328 711.959C-62.9852 744.079 -190.141 758.026 -291.988 756.54C-347.195 746.946 -342.797 727.81 -274.163 703.851C-160.242 677.496 -20.6552 650.89 109.318 626.324C190.166 601.768 204.931 580.425 156.06 560.462C54.7865 538.114 -66.8994 512.575 -179.112 479.608C-266.386 438.543 -305.898 384.148 -295.66 314.185C-241.74 235.602 -154.058 145.132 -49.6614 50.4467C65.0376 -33.3997 172.648 -100.548 265.009 -136.696C346.315 -135.022 409.122 -91.5189 456.488 -10.4241C494.266 86.375 523.783 184.095 550.099 256.788C573.622 279.753 599.275 246.66 629.2 161.035C659.124 43.1648 691.917 -70.5416 724.825 -151.134C754.953 -184.75 779.879 -161.628 793.981 -91.8119C798.469 10.0301 784.954 122.021 749.776 224.009C703.558 306.318 638.902 358.118 563.422 380.403C498.257 375.318 446.033 352.206 423.262 321.53C444.172 281.699 510.51 247.246 619.714 223.245C753.856 200.469 892.589 190.477 1005.43 193.051C1065.86 196.943 1057.19 211.402 976.357 235.957C976.331 235.964 976.318 235.968 976.318 235.968Z"
            stroke="url(#paint4_linear_5_52)"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            opacity="0.94"
            d="M933.478 399.905C817.976 422.012 686.715 454.875 566.622 497.091C477.105 539.004 431.702 589.255 431.893 644.842C475.46 696.736 546.822 748.588 629.174 794.017C717.009 826.388 789.773 842.699 839.574 836.641C870.174 810.401 874.28 760.306 856.8 690.323C822.885 616.51 776.755 543.523 725.895 486.681C668.699 463.088 614.142 477.432 566.788 533.05C518.338 622.599 479.565 731.304 452.637 836.798C425.697 916.062 411.876 949.427 409.53 933.283C406.1 873.908 411.646 783.376 422.178 680.593C426.36 579.41 428.132 496.39 420.533 439.819C396.499 411.874 353.723 411.121 287.831 430.11C202.712 467.105 98.0217 509.301 -17.863 548.629C-128.252 589.496 -223.763 619.753 -287.066 637.665C-307.007 652.093 -276.943 655.033 -197.816 648.065C-88.1282 639.569 37.676 623.813 153.178 601.705C228.62 579.609 251.315 552.207 221.569 519.031C144.967 484.316 43.4135 441.179 -61.111 388.448C-157.565 332.244 -223.852 265.587 -253.1 190.655C-247.694 117.26 -207.57 43.3323 -142.928 -22.6338C-58.7522 -70.5939 32.6015 -96.0596 121.558 -91.1318C211.101 -57.589 289.998 5.59402 356.184 90.5809C417.906 177.169 468.422 255.114 509.337 305.972C548.377 313.61 581.055 275.778 607.983 196.545C634.924 91.0517 654.84 -13.1966 666.595 -94.2077C676.476 -141.32 674.959 -143.099 659.914 -103.31C640.407 -30.2714 605.867 62.531 557.825 159.351C510.382 252.363 457.699 328.655 408.828 383.866C379.478 418.905 371.292 434.326 393.924 436.011C451.209 424.649 541.683 409.195 657.874 395.605C782.136 378.321 899.028 368.277 986.021 368.046C1026.16 367.513 1008.92 377.808 933.478 399.905Z"
            stroke="url(#paint5_linear_5_52)"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            opacity="0.52"
            d="M889.605 561.655C788.077 581.293 671.912 607.502 560.579 638.534C468.154 668.373 406.623 700.566 380.103 731.639C389.423 757.44 427.086 776.921 482.664 785.5C553.452 783.23 623.309 765.36 683.616 730.122C737.638 684.977 773.938 626.816 792.374 561.718C795.919 479.64 735.649 445.27 691.611 524.566C660.36 610.484 631.762 708.224 607.818 801.393C583.886 873.731 565.717 910.36 551.832 907.807C536.252 869.556 521.628 801.801 504.415 717.096C480.726 624.713 448.736 537.874 404.57 465.463C349.235 410.064 278.562 375.757 193.162 360.357C101.477 362.533 3.23826 376.26 -92.476 395.354C-202.547 434.065 -226.045 488.522 -118.919 494.099C-16.843 494.245 94.4773 484.735 196.006 465.086C265.837 445.438 294.856 416.593 282.094 379.388C229.551 341.922 151.317 295.876 62.4238 242.748C-30.4217 190.613 -108.439 133.99 -163.149 77.1263C-195.725 27.7538 -199.64 -14.1799 -178.997 -42.0939C-138.185 -52.4413 -82.3397 -41.4243 -19.2655 -6.50047C51.701 45.4563 121.163 114.676 184.467 192.664C248.446 262.972 303.654 319.542 348.559 350.208C393.057 345.186 427.724 304.571 451.669 232.233C475.613 139.064 487.7 45.3098 488.376 -33.0229C488.618 -88.4742 476.965 -109.828 454.474 -97.0639C432.671 -54.5233 402.632 11.3485 368.564 89.7545C342.388 175.306 320.905 256.767 311.444 327.661C322.167 388.647 354.475 434.724 411.965 467.273C491.602 488.972 591.09 501.841 701.492 510.085C807.916 513.067 899.793 516.604 961.592 523.823C983.611 529.839 959.463 541.996 889.644 561.645C889.618 561.652 889.605 561.655 889.605 561.655Z"
            stroke="url(#paint6_linear_5_52)"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            opacity="0.99"
            d="M846.294 632.79C657.76 667.169 466.204 698.745 351.925 713.382C340.693 712.294 409.912 671.281 503.548 586.315C610.317 498.033 675.992 414.27 694.161 387.705C696.94 452.991 670.994 598.671 629.085 765.81C587.188 871.063 533.307 857.085 457.929 748.421C367.149 591.944 236.092 449.277 74.4088 356.328C-74.1542 311.748 -187.795 306.255 -207.264 310.304C-123.713 327.305 50.8595 324.815 239.394 290.436C333.616 256.056 301.244 193.04 182.644 116.455C22.3888 52.8218 -95.1917 4.65245 -138.899 4.18164C-123.573 52.0685 -55.2587 158.273 26.9788 289.546C123.178 373.006 200.749 373.048 242.645 267.795C285.676 34.7845 252.118 40.7062 290.241 234.168C388.862 364.186 550.889 458.861 741.859 519.533C891.161 564.48 940.516 598.41 846.294 632.79Z"
            stroke="url(#paint7_linear_5_52)"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            opacity="0.18"
            d="M802.918 574.838C643.837 604.3 472.655 611.237 346.57 592.341C287.334 567.493 294.933 512.439 339.851 438.438C415.599 382.349 479.782 348.597 513.136 368.423C543.379 452.468 540.638 587.581 504.721 730.195C468.817 826.848 403.129 836.295 310.654 769.179C215.054 651.256 94.8343 520.945 -27.9865 412.334C-119.978 325.977 -165.648 272.796 -132.74 241.073C-32.9972 221.791 123.637 202.425 282.718 172.952C371.739 143.49 368.653 106.704 293.722 74.9185C168.364 55.5733 50.8978 62.7506 -25.513 110.491C-71.4895 180.464 -69.6662 279.513 -39.1427 375.841C5.81379 421.374 53.6518 399.988 89.5558 303.378C125.485 160.753 146.064 37.5569 163.34 -24.8833C195.049 -23.1256 249.262 41.8675 342.299 136.584C465.77 249.213 621.32 350.26 773.007 426.186C874.28 496.149 891.952 545.354 802.957 574.827C802.931 574.834 802.918 574.838 802.918 574.838Z"
            stroke="url(#paint8_linear_5_52)"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            opacity="0.97"
            d="M759.568 419.271C629.595 443.826 484.27 442.152 361.207 418.329C253.954 377.463 268.68 311.308 304.444 368.36C328.86 458.171 329.511 576.763 299.586 694.623C269.662 780.248 211.994 805.85 135.711 774.703C63.9538 700.315 -14.4842 602.124 -78.6167 505.691C-112.238 411.058 -103.097 335.916 -38.2247 282.401C62.8955 235.529 196.095 201.18 326.068 176.625C406.916 152.069 425.276 139.619 389.665 143.94C308.001 154.894 215.679 191.712 139.013 254.152C49.8268 354.466 33.239 442.309 72.4453 338.95C102.37 221.069 140.836 112.427 191.938 40.5912C251.481 7.13215 336.013 21.9889 445.51 69.0701C561.395 139.368 685.478 215.168 789.072 279.858C846.638 346.243 840.442 394.705 759.607 419.26C759.581 419.267 759.568 419.271 759.568 419.271Z"
            stroke="url(#paint9_linear_5_52)"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            opacity="0.36"
            d="M716.448 250.72C614.983 270.369 499.201 273.696 391.591 265.859C298.618 262.354 231.298 256.558 189.567 258.671C167.968 278.414 159.566 319.239 153.599 384.619C153.51 468.361 144.496 565.84 120.551 658.998C96.6065 731.357 60.0013 765.527 18.6021 761.677C-16.9194 727.412 -45.8874 669.429 -55.6667 603.317C-45.3009 529.232 -3.37894 461.644 72.0501 408.536C162.103 356.402 268.183 318.998 369.648 299.36C439.378 279.712 470.602 279.68 465.834 297.759C426.934 316.833 372.313 353.755 318.648 402.091C236.602 461.027 175.045 467.848 199.92 374.418C223.852 281.26 267.622 191.743 328.427 122.408C391.208 71.4241 472.336 51.4408 563.869 57.4358C648.911 81.081 728.93 117.532 785.374 155.093C807.687 196.964 786.177 231.071 716.448 250.72Z"
            stroke="url(#paint10_linear_5_52)"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            opacity="0.5"
            d="M672.868 161.025C513.787 190.498 342.86 215.189 226.669 262.982C144.674 345.28 97.4608 480.864 61.5568 623.478C25.64 720.131 7.8283 724.818 42.7506 671.166C111.868 584.306 253.687 503.954 412.768 474.482C505.282 458.505 387.931 520.987 406.1 410.043C442.004 267.429 542.538 155.731 658.333 112.061C739.755 102.885 761.889 131.552 672.868 161.025Z"
            stroke="url(#paint11_linear_5_52)"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            opacity="0.53"
            d="M629.557 198.878C411.493 238.176 200.812 396.777 152.936 587.895C105.047 699.383 238.093 645.857 456.157 606.56C552.623 567.273 534.799 557.093 582.688 445.605C630.564 254.487 726.023 159.592 629.557 198.878Z"
            stroke="url(#paint12_linear_5_52)"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_5_52"
              x1="335.26"
              y1="-329.813"
              x2="335.26"
              y2="1086.85"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4CB8C4" />
              <stop offset="1" stop-color="#3CD3AD" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_5_52"
              x1="343.326"
              y1="-293.121"
              x2="343.326"
              y2="1056.54"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4CB8C4" />
              <stop offset="1" stop-color="#3CD3AD" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_5_52"
              x1="350.934"
              y1="-250.967"
              x2="350.934"
              y2="1026.44"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4CB8C4" />
              <stop offset="1" stop-color="#3CD3AD" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_5_52"
              x1="355.513"
              y1="-206.142"
              x2="355.513"
              y2="996.554"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4CB8C4" />
              <stop offset="1" stop-color="#3CD3AD" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_5_52"
              x1="357.462"
              y1="-166.344"
              x2="357.462"
              y2="966.879"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4CB8C4" />
              <stop offset="1" stop-color="#3CD3AD" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_5_52"
              x1="357.003"
              y1="-131.475"
              x2="357.003"
              y2="937.247"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4CB8C4" />
              <stop offset="1" stop-color="#3CD3AD" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_5_52"
              x1="388.877"
              y1="-100.646"
              x2="388.877"
              y2="907.932"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4CB8C4" />
              <stop offset="1" stop-color="#3CD3AD" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_5_52"
              x1="343.537"
              y1="4.18164"
              x2="343.537"
              y2="837.764"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4CB8C4" />
              <stop offset="1" stop-color="#3CD3AD" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_5_52"
              x1="358.525"
              y1="-24.8833"
              x2="358.525"
              y2="812.448"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4CB8C4" />
              <stop offset="1" stop-color="#3CD3AD" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_5_52"
              x1="364.693"
              y1="22.4797"
              x2="364.693"
              y2="787.458"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4CB8C4" />
              <stop offset="1" stop-color="#3CD3AD" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_5_52"
              x1="369.078"
              y1="56.4058"
              x2="369.078"
              y2="761.97"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4CB8C4" />
              <stop offset="1" stop-color="#3CD3AD" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_5_52"
              x1="377.066"
              y1="110.319"
              x2="377.066"
              y2="705.42"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4CB8C4" />
              <stop offset="1" stop-color="#3CD3AD" />
            </linearGradient>
            <linearGradient
              id="paint12_linear_5_52"
              x1="407.135"
              y1="190.128"
              x2="407.135"
              y2="654.496"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4CB8C4" />
              <stop offset="1" stop-color="#3CD3AD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="container flex flex-col lg:flex-row gap-12 items-center">
        <Text {...props} />
        <div className="w-full flex-1 overflow-hidden aspect-video relative ">
          <img className="website-animation z-[-1]" src={website.src} alt="" />
          <img
            className="w-full object-contain"
            src={macbook.src}
            alt="Macbook mockup"
          />
        </div>
      </div>
    </section>
  );
};
export default SmartOffertDark;
