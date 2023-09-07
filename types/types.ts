// 스택 네비게이션에 넘겨 줄 Params Type
export type StackNavigationParams = {
    BottomTab: undefined,
}

// BottomNavigation에 넘겨 줄 Params Type
export type BottomNavigationParams = {
    Home: undefined,
    Setting: { id: number }
}